import React from 'react';

import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

/** Thunk actions */
import { logout } from '../action-creators/auth';
import { loadModal } from '../action-creators/modals';

/** Modal Type Constant */
import { LOGIN_MODAL, SIGNUP_MODAL } from '../modals/modaltypes';

export class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.showLoginMenu = this.showLoginMenu.bind(this);
        this.showSignupMenu = this.showSignupMenu.bind(this);
    }

    showLoginMenu() {
        this.props.loadModal(LOGIN_MODAL);
    }

    showSignupMenu() {
        this.props.loadModal(SIGNUP_MODAL);
    }

    render() {
        return (
            <NavBar
                showLoginMenu={this.showLoginMenu}
                showSignupMenu={this.showSignupMenu}
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
        loadModal: modelType => dispatch(loadModal(modelType)),
        loggingOut: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
