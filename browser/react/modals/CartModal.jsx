import React from 'react';
import { connect } from 'react-redux';

import { hideModal, loadModal } from '../action-creators/modals';
import { removeCartItem } from '../action-creators/users';
import CartItem from '../components/CartItem';

import { LOGIN_MODAL, SIGNUP_MODAL } from './modaltypes';

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
        if (this.props.currentUser) {
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
        } else {
            return (
                <Modal onClose={this.onClose} dialogStyle={{backgroundColor: 'white'}}>
                    <div style={{display: 'flex', alignItems: 'center', width: '400px', height: '100px', justifyContent: 'center'}}>
                        <h3>Please <a onClick={() => this.props.loadModal(SIGNUP_MODAL)}>sign up</a> or <a onClick={() => this.props.loadModal(LOGIN_MODAL)}>login</a> to buy your games!</h3>
                    </div>
                </Modal>
            )
        }
    }

    renderCart() {
        const userCart = this.props.currentUser.lineitems;
        const cartTotal = (cart) => {
            let total = 0;
            cart.forEach((item) => {
                total += +item.price;
            })
            return total;
        };
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
                <div className="cart-total-box">
                    <div className="cart-total">
                        <b>Total cart price: </b>
                    </div>
                    <text className="cart-total">${cartTotal(userCart)}</text>
                    <div className="cart-total">
                        <button type="submit" className="btn btn-success">Proceed to Checkout!</button>
                    </div>
                </div>
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
        removingCartItem: (userId, itemId) => (dispatch(removeCartItem(userId, itemId))),
        loadModal: modalType => dispatch(loadModal(modalType))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
