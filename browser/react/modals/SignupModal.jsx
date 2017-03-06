import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import {signup} from '../action-creators/auth';
import Modal from './Modal';

class SignupModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.signupSubmit = this.signupSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    signupSubmit(evt) {
        evt.preventDefault();
        const credentials = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            password: evt.target.password.value
        };
        this.props.createNewAccount(credentials);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" style={{fontWeight: 'bold'}}>Sign Up</h4>
                        </div>

                        <div className="modal-body">
                            <form role="form" onSubmit={this.signupSubmit}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="firstName" className="form-control" id="uLogin" placeholder="First Name" />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-user" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="lastName" className="form-control" id="uPassword" placeholder="Last Name" />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-user" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="email" className="form-control" id="uLogin" placeholder="Email Address" />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-envelope" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="password" name="password" className="form-control" id="uLogin" placeholder="Password" />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-lock" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-default" style={{borderRadius: '4px'}}>Sign Up</button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        createNewAccount: credentials => dispatch(signup(credentials))
    }
};

export default connect(null, mapDispatchToProps)(SignupModal);
