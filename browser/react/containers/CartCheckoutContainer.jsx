import React from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { submitNewOrder } from '../action-creators/orders'
import { removeCartItem } from '../action-creators/users'

export class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardFormOpen: false
        };

        this.handleCardFormClick = this.handleCardFormClick.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    }

    // NOTE: event handlers for the cart checkout container
    submitOrder(evt) {
      evt.preventDefault();
      this.props.submittingNewOrder(this.props.currentUser.id)
    }

    handleCardFormClick(evt) {
        evt.preventDefault();
        if (this.state.cardFormOpen) this.setState({cardFormOpen: false});
        else this.setState({cardFormOpen: true});
    }

    render() {
        return (
            <Checkout
                cardFormOpen={this.state.cardFormOpen}
                currentUser={this.props.currentUser}
                submitOrder={this.submitOrder}
                removingCartItem={this.props.removingCartItem}
                handleCardFormClick={this.handleCardFormClick}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removingCartItem: (userId, itemId) => (dispatch(removeCartItem(userId, itemId))),
        submittingNewOrder: userId => dispatch(submitNewOrder(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
