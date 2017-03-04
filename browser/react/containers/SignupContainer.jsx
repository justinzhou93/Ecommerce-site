import React from 'react';
import { connect } from 'react-redux';
import Signup from '../components/Signup';

import {signup} from '../action-creators/auth';

export class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const credentials = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      password: evt.target.password.value,
      email: evt.target.email.value
    };
    this.props.createNewAccount(credentials)
  }

  render () {
    return (
      <Signup
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = dispatch  => {
  return {
    createNewAccount: credentials => dispatch(signup(credentials))
  }
};

export default connect(null, mapDispatchToProps)(SignupContainer);
