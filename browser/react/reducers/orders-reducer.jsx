/** Constants */
import { SET_ORDER_LIST, SET_SINGLE_ORDER } from '../action-creators/orders';

/** Initial State */
const initialOrderState = {
    orderList: [],
    currentOrder: {}
};

/** Orders reducer */
export default function (state = initialOrderState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_ORDER_LIST:
            newState.orderList = action.orderList;
            break;

        case SET_SINGLE_ORDER:
            newState.currentOrder = action.currentOrder;
            break;

        default:
            return state;
    }

    return newState;
}
