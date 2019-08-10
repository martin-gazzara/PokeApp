import {
  GET_ALL_POKEMON,
  GET_ALL_POKEMON_FAILED,
  GET_ALL_POKEMON_SUCCESS,
  GET_NEXT_POKEMON_LIST,
  GET_NEXT_POKEMON_LIST_NULL,
  SEARCH_POKEMON,
  SEARCH_POKEMON_FAILED,
  SEARCH_POKEMON_SUCCESS
} from './actions';

const initialState = {
  results:[],
  next: null,
  nextLoading: false,
  loading: false,
  error: false,
  searchLoading: false,
  searchError: false,
  searchResult: null,
  pokemonToSearch: null
}

export default function reducer(state = initialState, action){
  const {type, payload} = action;
  switch (type){
    case GET_ALL_POKEMON:
      return{
        ...state,
        loading: true,
        error: false
      }
    case GET_NEXT_POKEMON_LIST:
      return{
        ...state,
        nextLoading: true,
        error: false
      }
    case GET_ALL_POKEMON_SUCCESS:
      return{
        ...state,
        loading: false,
        results: [...state.results, ...payload.results],
        next: payload.next
      }
    case GET_ALL_POKEMON_FAILED:
      return{
        ...state,
        loading: false,
        error: true
      }
    case GET_NEXT_POKEMON_LIST_NULL:
      return{
        ...state,
        nextLoading: false
      }
    case SEARCH_POKEMON:
      const pokemon = payload && payload.pokemon ? payload.pokemon : state.pokemonToSearch
      return{
        ...state,
        searchLoading: true,
        searchError: false,
        pokemonToSearch: pokemon
      }
    case SEARCH_POKEMON_FAILED:
      return{
        ...state,
        searchError: true,
        searchLoading: false
      }
    case SEARCH_POKEMON_SUCCESS:
      return{
        ...state,
        searchLoading: false,
        searchResult: payload.result
      }
    default:
      return state
  }
}