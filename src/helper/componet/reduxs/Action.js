import {ADD_TO_CART} from './Type';

export function addtocart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

// export const addtocart = data => dispatch => {
//   dispatch({type: ADD_TO_CART, data: item});
// };
