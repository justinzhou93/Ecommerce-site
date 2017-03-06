import { combineReducers } from 'redux'

import authReducer from './auth-reducer';
import productsReducer from './products-reducer';
import ordersReducer from './orders-reducer';
import modalsReducer from './modal-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  orders: ordersReducer,
  modal: modalsReducer
})

export default rootReducer;
