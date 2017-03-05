import axios from 'axios';
import { browserHistory } from 'react-router';
import {loadLoggedInUser} from './auth';

export const INITIALIZE_USER = 'INITIALIZE_USER';


const init = users => ({type: INITIALIZE_USER, users});


/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(init(res.data)));
};

export const addNewCreditCard = (userId, cardInfo) => dispatch => {
  axios.post(`/api/users/${userId}/creditcard`, cardInfo)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};

export const addNewAddress = (userId, addressInfo) => dispatch => {
  axios.post(`/api/users/${userId}/address`, addressInfo)
    .then(() => {
      dispatch(loadLoggedInUser());
      browserHistory.push('/user');
    })
    .catch(() => dispatch(loadLoggedInUser()))
};
