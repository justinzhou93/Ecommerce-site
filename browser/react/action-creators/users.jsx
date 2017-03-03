import axios from 'axios';

export const INITIALIZE_USER = 'INITIALIZE_USER';


const init = users => ({type: INITIALIZE_USER, users});


/* ------------       DISPATCHERS     ------------------ */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(init(res.data)));
};
