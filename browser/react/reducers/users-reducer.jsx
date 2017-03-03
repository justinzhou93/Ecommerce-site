import {INITIALIZE, CREATE, REMOVE, UPDATE, MAKEADMIN} from '../action-creators/users';

const initialState = {
  users: []
};

export default function userReducer (state = initialState, action) {
  const newState = Object.assign({}, state);
}
  switch (action.type) {

    case INITIALIZE:
      newState.users = action.users;
      break;

    case CREATE:
      newState.users = [...state.users, action.users];
      break;

    case REMOVE:
      newState.users = users.filter(user => user.id !== action.id);
      break;

    case UPDATE:
      newState.users = users.map(user => (
        action.user.id === user.id ? action.user : user));
        break;
  }

