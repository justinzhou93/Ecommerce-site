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
                <div>
                    <h2>User Profile Page</h2>
                    {<ul>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</ul>}
                    <h4>User Addresses</h4>
                    <button onClick={this.props.handleAddressClick}>Manage Addresses</button>
                        {this.props.addressesOpen ? this.renderAddresses() : null}
                    <h4>User Credit Cards</h4>
                    <h6>Manage Credit Cards</h6>
                        <ul>
                            {
                                this.props.currentUser.credit_cards.map((card) => {
                                    return (
                                        <li key={card.id}>
                                            {card.number}
                                        </li>
                                    );
                                })
                            }
                            <button onClick={this.props.handleCardFormClick}>Add new credit card</button>
                        </ul>
                        {this.props.creditCardFormOpen ? <AddCreditCard /> : null}
                    <h4>User Orders</h4>
                    <Link to={'/orders'}>Manage Orders</Link>
                    <h4>User Reviews</h4>
                    <button onClick={this.props.handleReviewsClick}>Manage Reviews</button>
                        {this.props.reviewsOpen ? this.renderReviews() : null}
                </div>
            );
        } else { return <h2>Loading user profile...</h2> }
    }

    renderAddresses() {
        return (
            <ul>
                {
                    this.props.currentUser.addresses.map((address) => {
                        return (
                            <li key={address.id}>
                                {address.address1}
                                <Link to={'/address/edit'}>Edit</Link>
                            </li>
                        );
                    })
                }
                <Link to={'/address/add'}>Add a New Address</Link>
            </ul>
        );
    }

    renderReviews() {
        return (
            <ul>
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
            </ul>
        );
    }
}
