import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
import AddProductModal from './AddProductModal';
import DeleteWarningModal from './DeleteWarningModal';

/** Modal Type Constants */
import { LOGIN_MODAL, SIGNUP_MODAL, ADD_PRODUCT_MODAL, DELETE_WARNING_MODAL } from './modaltypes';

const MODAL_COMPONENTS = {
    LOGIN_MODAL: LoginModal,
    SIGNUP_MODAL: SignupModal,
    ADD_PRODUCT_MODAL: AddProductModal,
    DELETE_WARNING_MODAL: DeleteWarningModal
};

const ModalContainer = (props) => {
    if (!props.modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[props.modalType];

    return <SpecificModal />;
};

const mapStateToProps = state => {
    return {
        modalType: state.modal.modalType
    };
};

export default connect(mapStateToProps)(ModalContainer);
