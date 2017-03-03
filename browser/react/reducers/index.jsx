import { combineReducers } from 'redux'

import authReducer from './auth-reducer';
import productsReducer from './products-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer
})

export default rootReducer
