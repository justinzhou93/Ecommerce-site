import axios from 'axios';
import { browserHistory } from 'react-router';
import {loadLoggedInUser} from './auth';

export const INITIALIZE_USER = 'INITIALIZE_USER';
export const SET_USER_CART = 'SET_USER_CART';

/* ------------ ACTION CREATORS ------------------------ */

const setUserCart = (cart) => {
  return {
    type: SET_USER_CART,
    cart: cart
  }
}

const init = users => ({type: INITIALIZE_USER, users});

/* ------------       DISPATCHERS     ------------------ */

export const addNewCreditCard = (userId, cardInfo) => dispatch => {
  axios.post(`/api/users/${userId}/creditcard`, cardInfo)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

export const deleteCreditCard = (userId, cardId) => dispatch => {
  axios.delete(`/api/users/${userId}/creditcard/${cardId}`)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
}

export const addNewAddress = (userId, addressInfo) => dispatch => {
  axios.post(`/api/users/${userId}/address`, addressInfo)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

export const deleteAddress = (userId, addressId) => dispatch => {
  axios.delete(`/api/users/${userId}/address/${addressId}`)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

export const addCartItem = (userId, productId, productInfo) => dispatch => {
  axios.post(`/api/users/${userId}/cart/${productId}`, productInfo)
    .then(() => {
      dispatch(loadLoggedInUser());
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

export const removeCartItem = (userId, itemId) => dispatch => {
  axios.delete(`/api/users/${userId}/cart/${itemId}`)
    .then(() => dispatch(loadLoggedInUser()))
    .catch(() => dispatch(loadLoggedInUser()))
};

export const deleteUserReview = (productId, reviewId) => dispatch => {
  axios.delete(`/api/products/${productId}/reviews/${reviewId}`)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

/* ----------- ADMIN --------------- */
export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(init(res.data)));
};
