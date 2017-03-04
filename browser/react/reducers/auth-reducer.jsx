/** Auth Constants */
import { SET_CURRENT_USER } from '../action-creators/auth';

/** InitialState */

const initialAuthState = {
  currentUser: {},
  addresses: [],
  creditcards: [],
  orders: [],
  reviews: []
};

/** Auth Reducer */
const authReducer = (state = initialAuthState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.addresses = action.addresses;
      newState.creditcards = action.creditCards;
      newState.orders = action.orders;
      newState.reviews = action.reviews;
      break;

    default:
      return state

  }
  return newState;
};

export default authReducer;
