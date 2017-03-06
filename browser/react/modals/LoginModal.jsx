import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { localLogin } from '../action-creators/auth';
import Modal from './Modal';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    loginSubmit(evt) {
        evt.preventDefault();
        const credentials = {
            username: evt.target.email.value,
            password: evt.target.password.value
        };
        this.props.localLogin(credentials);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Log in</h4>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={this.loginSubmit} role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="email" className="form-control" id="uLogin" placeholder="Email" />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-envelope" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="password" name="password" className="form-control" id="uPassword" placeholder="Password" />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-lock" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" style={{borderRadius: '4px'}}>Login</button>
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
        localLogin: (credentials) => dispatch(localLogin(credentials))
    }
};

export default connect(null, mapDispatchToProps)(LoginModal);
