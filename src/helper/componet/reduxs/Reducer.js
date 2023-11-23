import {ADD_TO_CART} from './Type';
const intialstate = [];
export const Reducers = (state = intialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    default:
      return state;
  }
};
