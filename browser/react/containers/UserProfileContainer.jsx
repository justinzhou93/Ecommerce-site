import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';
import {addNewCreditCard} from '../action-creators/users';

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
        this.handleAddCardSubmit = this.handleAddCardSubmit.bind(this);
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

    handleAddCardSubmit(evt) {
        evt.preventDefault();
        const cardInfo = {
            //need to add card Info form data after route has been made
        }
        this.props.addNewCreditCart(this.props.currentUser.id, cardInfo);
        this.setState({creditCardFormOpen: false})
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
                handleAddCardSubmit={this.handleAddCardSubmit}
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
        addNewCreditCard: (userId, cardInfo) => {dispatch(addNewCreditCard(userId, cardInfo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);
