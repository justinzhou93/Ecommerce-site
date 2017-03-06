import React from 'react';
import { connect } from 'react-redux';

/** Modal Components */
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

/** Modal Type Constants */
import { LOGIN_MODAL, SIGNUP_MODAL } from './modaltypes';

const MODAL_COMPONENTS = {
    LOGIN_MODAL: LoginModal,
    SIGNUP_MODAL: SignupModal
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
