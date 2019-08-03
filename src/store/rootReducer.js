import {
  ADD_ITEM
} from './actions';

const initialState = {
  items:[
    'Item 1',
    'Item 2',
    'Item 3'
  ]
}

export default function reducer(state = initialState, action){
  const {type, payload} = action;
  switch (type){
    case ADD_ITEM:
      return{
        ...state,
        items: [...state.items, payload.item]
      }
    default:
      return state
  }
}