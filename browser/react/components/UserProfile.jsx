import React from 'react';
import { Link } from 'react-router';

import AddCreditCard from './AddCreditCard';

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="flex-container">
                    <div className="my-account-header">
                        <h2 className="my-account-text">My Account</h2>
                    </div>
                    <div className="user-profile-items">
                        <div className="profile-items">
                            <div className="profile-header">
                                <h2 className="profile-item-header">Address Book</h2>
                                <Link to={'/address/add'} className="header-link-text">Add a New Address</Link>
                            </div>
                            <span><button onClick={this.props.handleAddressClick}>Manage Addresses</button></span>
                            {this.props.addressesOpen ? this.renderAddresses() : null}
                        </div>

                        <div className="profile-items" />
                    </div>
                    <div className="user-profile-items">
                        <div className="profile-items">
                            <div className="profile-header">
                                <h2 className="profile-item-header">Payment Methods</h2>
                                <a onClick={this.props.handleCardFormClick} className="header-link-text">Add new credit card</a>
                            </div>
                            <span><button onClick={this.props.handleCardsClick}>Manage Credit Cards</button></span>
                            {this.props.cardsOpen ? this.renderCreditCards() : null}
                        </div>
                        <div className="profile-items">
                            {this.props.creditCardFormOpen ? <AddCreditCard /> : null}
                        </div>
                    </div>
                    <div className="user-profile-items">
                        <div className="profile-items">
                            <div className="profile-header">
                                <h2 className="profile-item-header">Order History</h2>
                            </div>
                            <Link to={'/orders'}>View Order History</Link>
                        </div>
                    </div>
                    <div className="user-profile-items">
                        <div className="profile-items">
                            <div className="profile-header">
                                <h2 className="profile-item-header">Manage Reviews</h2>
                            </div>
                            <span><button onClick={this.props.handleReviewsClick}>Manage Reviews</button></span>
                                {this.props.reviewsOpen ? this.renderReviews() : null}
                        </div>
                    </div>

                </div>
            );
        } else { return <h2>Loading user profile...</h2> }
    }

    renderAddresses() {
        return (
            <div>
                {
                    this.props.currentUser.addresses.map((address) => {
                        return (
                            <address key={address.id} className="managed-items">
                                {address.address1} {address.address2}<br />
                                {address.city}, {address.state}<br />
                                <Link to={'/address/edit'} className="small-link-text">Edit</Link>
                                <span><a className="small-link-text">Delete</a></span>
                            </address>
                        );
                    })
                }
            </div>
        );
    }

    renderCreditCards() {
        return (
            <div>
                {
                    this.props.currentUser.credit_cards.map((card) => {
                        return (
                            <ul key={card.id}>
                                {card.number}
                            </ul>
                        );
                    })
                }
            </div>

        );
    }

    renderReviews() {
        return (
            <div>
                {
                    this.props.currentUser.reviews.map((review) => {
                        return (
                            <li key={review.id}>
                                Review ${review.id}
                                <Link to={'/review/edit'}>Edit</Link>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}
