import React from 'react';
import { connect } from 'react-redux';
import { submitNewOrder } from '../action-creators/orders'

import Checkout from '../components/Checkout';

export class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submitOrder = this.submitOrder.bind(this);
        this.selectCardSubmit = this.selectCardSubmit.bind(this);
        this.selectAddressSubmit = this.selectAddressSubmit.bind(this);
    }

    // NOTE: event handlers for the cart checkout container
    submitOrder(evt) {
      evt.preventDefault();
      submitNewOrder(this.props.user.id)
    }

    selectCardSubmit(evt) {
      evt.preventDefault();
      this.props.user.card = evt.target.card
      this.setState({user: this.props.user})
    }

    selectAddressSubmit(evt) {
      evt.preventDefault();
      this.props.user.address = evt.target.address;
      this.setState({user: this.props.user})
    }

    render() {
        return (
            <Checkout
                currentUser={this.props.currentUser}
                submitOrder={this.handleAddressClick}
                selectCardSubmit={this.handleCardsClick}
                selectAddressSubmit={this.handleCardFormClick}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    };
}

export default connect(mapStateToProps)(UserProfileContainer);
