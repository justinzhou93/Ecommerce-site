import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { removeCartItem } from '../action-creators/users';
import CartItem from '../components/CartItem';

import Modal from './Modal';

class CartModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    render() {
        const userCart = this.props.currentUser.lineitems;
        return (
            <Modal onClose={this.onClose}>
                <div className="user-profile-items" style={{backgroundColor: 'white', width: '800px'}}>
                    <div className="order-items">
                        <div className="cart-hr-box">
                            <h3 className="cart-header">My Cart</h3>
                        </div>
                        {userCart.length ? this.renderCart() : <h4 style={{marginTop: '1em'}}> Your cart is currently empty </h4>}
                    </div>

                </div>
            </Modal>
        );
    }

    renderCart() {
        const userCart = this.props.currentUser.lineitems;
        return (
            <div>
                {
                    userCart.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                userId={this.props.currentUser.id}
                                removingCartItem={this.props.removingCartItem}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        removingCartItem: (userId, itemId) => (dispatch(removeCartItem(userId, itemId)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
