import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import AddProductModal from './AddProductModal';
import DeleteWarningModal from './DeleteWarningModal';
import EditProductModal from './EditProductModal';
import CartModal from './CartModal';

/** Modal Type Constants */
import { LOGIN_MODAL, SIGNUP_MODAL, ADD_PRODUCT_MODAL, DELETE_WARNING_MODAL, EDIT_PRODUCT_MODAL, CART_MODAL } from './modaltypes';

const MODAL_COMPONENTS = {
    LOGIN_MODAL: LoginModal,
    SIGNUP_MODAL: SignupModal,
    ADD_PRODUCT_MODAL: AddProductModal,
    DELETE_WARNING_MODAL: DeleteWarningModal,
    EDIT_PRODUCT_MODAL: EditProductModal,
    CART_MODAL: CartModal
};

const ModalContainer = (props) => {
    if (!props.modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[props.modalType];

    return <SpecificModal payload={props.payload} />;
};

const mapStateToProps = state => {
    return {
        modalType: state.modal.modalType,
        payload: state.modal.payload
    };
};

export default connect(mapStateToProps)(ModalContainer);
