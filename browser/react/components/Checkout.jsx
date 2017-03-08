import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router';

import AddCreditCard from './AddCreditCard';


export default function (props) {
    const censorCard = (cardNum) => {
            return 'XXXX-XXXX-XXXX-' + cardNum.slice(-4);
    }
    if (props.currentUser) {
        return (
            <div className="flex-container">
                <div className="my-account-header">
                    <h2 className="my-account-text">Checkout</h2>
                </div>
                <div className="user-profile-items" style={{flexDirection: 'column'}}>
                    {
                        props.currentUser.lineitems.length ? props.currentUser.lineitems.map(lineitem => {
                            return <CartItem key={lineitem.id} item={lineitem} userId={props.currentUser.id} removingCartItem={props.removingCartItem} />
                        }) : <h4 style={{marginTop: '1em', textAlign: 'center'}}>Your cart is currently empty</h4>
                    }
                    <div className="cart-total-box">
                        <div className="cart-total">
                            <b>Total cart price: </b>
                        </div>
                        <text className="cart-total">${props.currentUser.lineitems.reduce((accum, lineitem) => accum + +lineitem.price, 0)}</text>
                    </div>
                </div>
                <div className="user-profile-items">
                    <div className="profile-items">
                        <div className="profile-header">
                            <h2 className="profile-item-header">Choose Shipping Address</h2>
                            <Link to={'/address/add'} className="header-link-text">Add a shipping address</Link>
                        </div>
                        <select>
                            {
                                props.currentUser.addresses.map((address) => {
                                    return (
                                        <option key={address.id}>
                                            {address.address1}, {address.address2} {address.city}, {address.state} {address.zipCode}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="user-profile-items">
                    <div className="profile-items">
                        <div className="profile-header">
                            <h2 className="profile-item-header">Choose Billing Address</h2>
                            <Link to={'/address/add'} className="header-link-text">Add a billing address</Link>
                        </div>
                        <select>
                            {
                                props.currentUser.addresses.map((address) => {
                                    return (
                                        <option key={address.id}>
                                            {address.address1}, {address.address2} {address.city}, {address.state} {address.zipCode}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="user-profile-items">
                        <div className="profile-items">
                            <div className="profile-header">
                                <h2 className="profile-item-header">Payment Methods</h2>
                                <a onClick={props.handleCardFormClick} className="header-link-text">Add new credit card</a>
                            </div>
                            <select>
                                {
                                    props.currentUser.credit_cards.map((card) => {
                                        return (
                                            <option key={card.id}>
                                                {censorCard(card.number)}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="profile-items">
                            {props.cardFormOpen ? <AddCreditCard currentUser={props.currentUser} /> : null}
                        </div>
                    </div>
                <div className="user-profile-items" style={{border: '0', justifyContent: 'flex-end'}}>
                    <button onClick={props.submitOrder} className="btn btn-success"><Link to="orderconfirmation">Submit Order</Link></button>
                </div>
            </div>
        );
    } else {
        return <h3>Loading Checkout Page...</h3>
    }
}
