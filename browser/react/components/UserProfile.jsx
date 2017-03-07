import React from 'react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

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
                            <span><a onClick={this.props.handleAddressClick}>Manage Addresses</a></span>
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
                            <span><a onClick={this.props.handleCardsClick}>Manage Credit Cards</a></span>
                            {this.props.cardsOpen ? this.renderCreditCards() : null}
                        </div>
                        <div className="profile-items">
                            {this.props.creditCardFormOpen ? <AddCreditCard currentUser={this.props.currentUser} /> : null}
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
                        <div className="profile-review-items">
                            <div className="profile-header">
                                <h2 className="profile-review-header">Manage Reviews</h2>
                            </div>
                            <span><a onClick={this.props.handleReviewsClick}>Manage Reviews</a></span>
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
                    this.props.currentUser.addresses.length ? this.props.currentUser.addresses.map((address) => {
                        return (
                            <address key={address.id} className="managed-items" style={{letterSpacing: '1px'}}>
                                {address.address1} {address.address2}<br />
                                {address.city}, {address.state} {address.zipCode}<br />
                                <Link to={'/address/edit'} className="small-link-text">Edit</Link>
                                <span><a onClick={() => this.props.deletingAddress(this.props.currentUser.id, address.id)} className="small-link-text">Delete</a></span>
                            </address>
                        );
                    }) : <h5 style={{marginTop: '10px'}}>You currently have no credit cards!</h5>
                }
            </div>
        );
    }

    renderCreditCards() {
        const censorCard = (cardNum) => {
            return 'XXXX-XXXX-XXXX-' + cardNum.slice(-4);
        }
        return (
            <div>
                {
                    this.props.currentUser.credit_cards.length ? this.props.currentUser.credit_cards.map((card) => {
                        return (
                            <div key={card.id} className="managed-items">
                                <div className="credit-card-box">
                                    <div className="credit-card-headers">
                                        Cardholder: <br />
                                        Card number: <br />
                                        Expiration:
                                    </div>
                                    <div className="credit-card-info">
                                        {card.name} <br />
                                        {censorCard(card.number)} <br />
                                        {card.month}/{card.year}
                                    </div>
                                    <span><a onClick={() => this.props.deletingCreditCard(this.props.currentUser.id, card.id)} className="small-link-text">Delete</a></span>
                                </div>
                            </div>
                        );
                    }) : <h5 style={{marginTop: '10px'}}>You currently have no credit cards!</h5>
                }
            </div>

        );
    }

    renderReviews() {
        const changeDate = (dateStr) => dateStr.slice(0, 10).split('-').join('/');
        return (
            <div>
                {
                    this.props.currentUser.reviews.length ? this.props.currentUser.reviews.map((review) => {
                        return (
                            <div key={review.id} className="sing-review">
                                <h4>{review.title}</h4>
                                <StarRatingComponent name="boardgame-rating" starCount={5} value={review.rating} />
                                <h6>{changeDate(review.date)}</h6>
                                <p>{review.body}</p>
                                <span><a onClick={() => this.props.deletingUserReview(review.product_id, review.id)} className="small-link-text">Delete this review</a></span>
                            </div>
                        );
                    }) : <h5 style={{marginTop: '10px'}}>You haven't written any reviews!</h5>
                }
            </div>
        );
    }
}
