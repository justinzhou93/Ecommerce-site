/** Constant */
import { SHOW_MODAL, HIDE_MODAL } from '../action-creators/modals';

/** Initial State */
const initialModalState = {
    modalType: null
};

/** Modal reducer */
export default function (state = initialModalState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SHOW_MODAL:
            newState.modalType = action.modalType;
            break;

        case HIDE_MODAL:
            return initialModalState;

        default:
            return state;
    }

    return newState;
}
