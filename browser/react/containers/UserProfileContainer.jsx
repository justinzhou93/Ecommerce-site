import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';
import { deleteAddress, deleteCreditCard, deleteUserReview } from '../action-creators/users';

export class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressesOpen: false,
            creditCardFormOpen: false,
            reviewsOpen: false,
            cardsOpen: false
        }
        this.handleAddressClick = this.handleAddressClick.bind(this);
        this.handleCardFormClick = this.handleCardFormClick.bind(this);
        this.handleReviewsClick = this.handleReviewsClick.bind(this);
        this.handleCardsClick = this.handleCardsClick.bind(this);
    }

    handleAddressClick(evt) {
        evt.preventDefault();
        if (this.state.addressesOpen) this.setState({addressesOpen: false});
        else this.setState({addressesOpen: true});
    }

    handleCardFormClick(evt) {
        evt.preventDefault();
        if (this.state.creditCardFormOpen) this.setState({creditCardFormOpen: false});
        else this.setState({creditCardFormOpen: true});
    }

    handleReviewsClick(evt) {
        evt.preventDefault();
        if (this.state.reviewsOpen) this.setState({reviewsOpen: false});
        else this.setState({reviewsOpen: true});
    }

    handleCardsClick(evt) {
        evt.preventDefault();
        if (this.state.cardsOpen) this.setState({cardsOpen: false});
        else this.setState({cardsOpen: true});
    }
    render() {
        return (
            <UserProfile
                addressesOpen={this.state.addressesOpen}
                reviewsOpen={this.state.reviewsOpen}
                creditCardFormOpen={this.state.creditCardFormOpen}
                cardsOpen={this.state.cardsOpen}
                currentUser={this.props.currentUser}
                handleAddressClick={this.handleAddressClick}
                handleCardsClick={this.handleCardsClick}
                handleCardFormClick={this.handleCardFormClick}
                handleReviewsClick={this.handleReviewsClick}
                deletingAddress={this.props.deletingAddress}
                deletingCreditCard={this.props.deletingCreditCard}
                deletingUserReview={this.props.deletingUserReview}
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
        deletingAddress: (userId, addressId) => {dispatch(deleteAddress(userId, addressId))},
        deletingCreditCard: (userId, creditId) => {dispatch(deleteCreditCard(userId, creditId))},
        deletingUserReview: (productId, reviewId) => {dispatch(deleteUserReview(productId, reviewId))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
