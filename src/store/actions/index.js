export const GET_ALL_POKEMON = "GET_ALL_POKEMON"; 
export const GET_ALL_POKEMON_SUCCESS = "GET_ALL_POKEMON_SUCCESS";
export const GET_ALL_POKEMON_FAILED = "GET_ALL_POKEMON_FAILED";
export const GET_NEXT_POKEMON_LIST = 'GET_NEXT_POKEMON_LIST';
export const GET_NEXT_POKEMON_LIST_SUCCESS = 'GET_NEXT_POKEMON_LIST_SUCCESS';
export const GET_NEXT_POKEMON_LIST_NULL = 'GET_NEXT_POKEMON_LIST_NULL';
export const GET_NEXT_POKEMON_LIST_FAILED = 'GET_NEXT_POKEMON_LIST_FAILED';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const SEARCH_POKEMON_SUCCESS = 'SEARCH_POKEMON_SUCCESS';
export const SEARCH_POKEMON_FAILED = 'SEARCH_POKEMON_FAILED';

export function getAllPokemon(){
  return {
    type: GET_ALL_POKEMON
  }
}

export function getNextPokemonList(){
  return{
    type: GET_NEXT_POKEMON_LIST
  }
}

export function searchPokemon(pokemon){
  return{
    type: SEARCH_POKEMON,
    payload:{
      pokemon
    }
  }
}

export function retrySearch(){
  return{
    type: SEARCH_POKEMON
  }
}