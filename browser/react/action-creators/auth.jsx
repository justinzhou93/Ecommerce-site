import axios from 'axios';

/** Constants */
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/** Action-creators */
const setCurrentUser = (user) => {
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
            .then(user => dispatch(setCurrentUser(user)))
            .catch(() => dispatch(setCurrentUser(null)))
    }
};

export const localLogin = (credentials) => {
    return dispatch => {
        axios.post('/api/auth/login/local', credentials)
            .then(() => dispatch(loadLoggedInUser()))
            .catch(() => dispatch(loadLoggedInUser()))
    }
};

export const signup = (credentials) => {
    return dispatch => {
        axios.post('/api/auth/signup/local', credentials)
            .then(res => res.data)
            .then(user => dispatch(setCurrentUser(user)))
            .catch(() => dispatch(setCurrentUser(null)))
    }
};

export const logout = () => {
    return dispatch => {
        axios.post('/api/auth/logout')
            .then(() => dispatch(loadLoggedInUser()))
            .catch(() => dispatch(loadLoggedInUser()))
    }
};
