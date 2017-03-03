import axios from 'axios';

/* -----------------    CONSTANTS    ------------------ */
export const SET_ORDER_LIST = 'SET_ORDER_LIST';
export const SET_SINGLE_ORDER = 'SET_SINGLE_ORDER';

/* -----------------    ACTION-CREATORS    ------------------ */
const settingOrderList = (orders) => {
  return {
    type: SET_ORDER_LIST,
    orderList: orders
  }
}

const settingSingleOrder = (order) => {
  return {
    type: SET_SINGLE_ORDER,
    order: order
  }
}

/* -----------------    THUNK ACTION CREATORS    ------------------ */

// load all orders
export const GetOrdersFromServer = () => {
  return dispatch => {
    axios.get('/api/orders')
        .then((orders) => {
          dispatch(settingOrderList(orders))
        })
  }
}

// load single orders
export const GetSingleOrder = (orderId) => {
  return dispatch => {
    axios.get(`/api/orders/${orderId}`)
        .then((order) => {
            dispatch(settingSingleOrder(order))
        })
  }
}
