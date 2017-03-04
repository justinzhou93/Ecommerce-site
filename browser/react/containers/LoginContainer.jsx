import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';

import { localLogin } from '../action-creators/auth';

export class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const credentials = {
            username: evt.target.email.value,
            password: evt.target.password.value
        }
        this.props.loginUser(credentials);
    }

    render () {
        return (
            <Login
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: credentials => dispatch(localLogin(credentials))
    }
};

export default connect(null, mapDispatchToProps)(LoginContainer);
