import axios from 'axios'

/** Auth Constants */
import { SET_CURRENT_USER } from '../action-creators/auth';

/** InitialState */

const initialAuthState = {
  currentUser: {}
};

/** Auth Reducer */
const authReducer = (state = initialAuthState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case SET_CURRENT_USER:
      newState.currentUser = action.currentUser
      break;

    default:
      return state

  }
  return newState;
};

export default authReducer;
