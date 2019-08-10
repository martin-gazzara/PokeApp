import {
  GET_ALL_POKEMON, 
  GET_ALL_POKEMON_SUCCESS, 
  GET_ALL_POKEMON_FAILED,
  GET_NEXT_POKEMON_LIST,
  GET_NEXT_POKEMON_LIST_SUCCESS,
  GET_NEXT_POKEMON_LIST_NULL,
  GET_NEXT_POKEMON_LIST_FAILED,
  SEARCH_POKEMON,
  SEARCH_POKEMON_FAILED,
  SEARCH_POKEMON_SUCCESS
} from '../actions';

import {
  takeLatest, 
  takeEvery, 
  put, 
  call, 
  all, 
  select, 
  race, 
  delay
} from 'redux-saga/effects';

import { 
  allPokemonService,
} from '../../services';

import {
  setHeight,
  setTypes,
  setWeight,
  setStats,
  setChain
} from '../../utils';

import defaultAvatar from '../../../assets/images/unavailable.jpg';



let nextId = 0;

function* getAllPokemonWorker(){
  try{
    const response = yield call(fetch, allPokemonService);
    const { results, next } = yield response.json();
    const resultWithId = results.map(item => {
      item.id = nextId;
      nextId += 1;
      return item;
    });
    yield put({
      type: GET_ALL_POKEMON_SUCCESS,
      payload: {
        results: resultWithId,
        next
      }
    });
  }catch(error){
    yield put({
      type: GET_ALL_POKEMON_FAILED,
      error
    })
  }
}

function* getNextPokemonListWorker(){
  try{
    const nextUrl = yield select( (state) => state.next);
    if(nextUrl){
      const response = yield call(fetch, nextUrl);
      const { results, next } = yield response.json();
      const resultWithId = results.map(item => {
        item.id = nextId;
        nextId += 1;
        return item;
      });
      yield put({
        type: GET_ALL_POKEMON_SUCCESS,
        payload: {
          results: resultWithId,
          next
        }
      });
    }else{
      yield put({
        type: GET_NEXT_POKEMON_LIST_NULL
      })
    }
  }catch(err){

  }
}

function* searchPokemonWorker({payload}){
  try{
    let pokemonData = {};
    const { pokemon } = payload;
    const { response, timeout } = yield race({
      response: call(fetch, `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`),
      timeout: delay(10000)
    })

    if (timeout){

      yield put({
        type: SEARCH_POKEMON_FAILED
      })

    }else{

      const result = yield response.json();

      pokemonData.id = result.id;
      pokemonData.name = result.name;
      pokemonData.sprite = result.sprites.front_default ? {uri: result.sprites.front_default} : defaultAvatar;
      pokemonData.types = setTypes(result.types);
      pokemonData.height = setHeight(result.height);
      pokemonData.weight = setWeight(result.weight);
      pokemonData.stats = setStats(result.stats);

      // GETTING EVOLUTION CHAIN
      const responsePokemonSpecies = yield call(fetch, result.species.url);
      const { evolution_chain } = yield responsePokemonSpecies.json();
      const responseEvolutionChain = yield call(fetch, evolution_chain.url);
      const { chain } = yield responseEvolutionChain.json();
      pokemonData.chain = yield setChain(chain).reverse();


      // END OF GETTING ALL DATA
      yield put({
        type: SEARCH_POKEMON_SUCCESS,
        payload:{
          result: pokemonData
        }
      });
      
    }
  }catch(err){
    yield put({
      type: SEARCH_POKEMON_FAILED
    })
  }
}

function* getAllPokemonWatcher(){
  yield takeLatest(GET_ALL_POKEMON, getAllPokemonWorker);
  yield takeEvery(GET_NEXT_POKEMON_LIST, getNextPokemonListWorker)
}

function* searchPokemonWatcher(){
  yield takeLatest(SEARCH_POKEMON, searchPokemonWorker)
}

export default function* rootSaga(){
  yield all([
    getAllPokemonWatcher(),
    searchPokemonWatcher()
  ])
}