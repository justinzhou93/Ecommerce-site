import {SET_USER_CART} from '../action-creators/users';

const initialState = {
  cart: null
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_USER_CART:
      newState.cart = action.cart;
      break;

    default:
      return state;
  }

  return newState;
}
