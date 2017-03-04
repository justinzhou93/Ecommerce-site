import React from 'react';

import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

/** Thunk actions */
import { logout } from '../action-creators/auth';

export class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBar
                loggingOut={this.props.loggingOut}
                currentUser={this.props.currentUser}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loggingOut: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
