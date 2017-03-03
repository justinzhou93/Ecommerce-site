import {React, Component} from 'react';
import {Connect} from 'react-redux';
import {Signup} from '../components/Signup';

class SignupContainer extends Component {
  constructor() {
    super();
    this.state = this.initialState();
    this.handleChange = this.hangleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  intiialState () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  reset() {
    this.setState(this.intiialState());
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitUser(this.state)
      .then(() => this.reset())
      .catch(error => console.error(error));
  }

}

const mapDispatchToProps = {addUser}
