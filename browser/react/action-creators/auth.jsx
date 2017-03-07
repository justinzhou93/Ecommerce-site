import axios from 'axios';
import {browserHistory} from 'react-router';

/** Constants */
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/** Action-creators */
const setCurrentUser = (user, addresses, creditCards, orders, reviews, cart) => {
    return {
        type: SET_CURRENT_USER,
        currentUser: user
    }
};

/** Thunk dispatchers */
export const loadLoggedInUser = () => {
    return dispatch => {
        axios.get('/api/auth/whoami')
            .then(res => res.data)
            .then(user => {
                dispatch(setCurrentUser(user));
            })
            .catch(() => dispatch(setCurrentUser(null)))
    }
};

export const localLogin = (credentials) => {
    return dispatch => {
        const {username, password} = credentials;
        axios.post('/api/auth/login/local', {username, password})
            .then(() => dispatch(loadLoggedInUser()))
            .then(() => browserHistory.push('/'))
            .catch(() => dispatch(loadLoggedInUser()))
    }
};

export const signup = (credentials) => {
    return dispatch => {
        axios.post('/api/auth/signup/local', credentials)
            .then(res => res.data)
            .then(user => dispatch(setCurrentUser(user)))
            .then(() => browserHistory.push('/'))
            .catch(() => dispatch(setCurrentUser(null)))
    }
};

export const logout = () => {
    return dispatch => {
        axios.post('/api/auth/logout')
            .then(() => dispatch(loadLoggedInUser()))
            .then(() => browserHistory.push('/'))
            .catch(() => dispatch(loadLoggedInUser()))
    }
};
