import { combineReducers } from 'redux'

import authReducer from './auth-reducer';
import productsReducer from './products-reducer';
import ordersReducer from './orders-reducer';
import modalsReducer from './modal-reducer';
import usersReducer from './users-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  orders: ordersReducer,
  modal: modalsReducer,
  users: usersReducer
})

export default rootReducer;
