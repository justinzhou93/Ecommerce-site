import {React, Component} from 'react';
import { connect } from 'react-redux';
import {SignupComponent} from '../components/Signup';
import {signup} from '../action-creators/auth';

class SignupContainer extends Component {
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
    this.props.signupAction(credentials)
  }

  render () {
    return (
      <SignupComponent handleSubmit={this.handleSubmit} />
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = dispatch  => {
  return {
    signupAction: function (credentials) {
      dispatch(signup(credentials))
    }
  }
};

export default connect(null, mapDispatchToProps)(SignupContainer);
