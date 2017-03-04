import { combineReducers } from 'redux'

import authReducer from './auth-reducer';
import productsReducer from './products-reducer';
import ordersReducer from './orders-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  orders: ordersReducer
})

export default rootReducer
