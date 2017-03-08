import React from 'react';
import { connect } from 'react-redux';

import Checkout from '../components/Checkout';

export class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submitOrder = this.submitOrder.bind(this);
        this.selectCardSubmit = this.selectCardSubmit.bind(this);
        this.selectAddressSubmit = this.selectAddressSubmit.bind(this);
    }

    submitOrder(evt) {
      evt.preventDefault();
    }

    selectCardSubmit(evt) {
      evt.preventDefault();
    }

    selectAddressSubmit(evt) {
      evt.preventDefault();
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
