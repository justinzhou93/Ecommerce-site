import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile';

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        addresses: state.auth.addresses,
        creditCards: state.auth.creditcards,
        orders: state.auth.orders,
        reviews: state.auth.reviews
    };
}

export default connect(mapStateToProps)(UserProfile);
