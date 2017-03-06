/** Constants */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

/** Action-creators */
const showingModal = (modalType) => {
    return {
        type: SHOW_MODAL,
        modalType
    };
};

const hidingModal = () => {
    return {
        type: HIDE_MODAL
    };
};

/** Thunk actions */
export const loadModal = (modalType) => {
    return dispatch => dispatch(showingModal(modalType));
};

export const hideModal = () => {
    return dispatch => dispatch(hidingModal());
};
