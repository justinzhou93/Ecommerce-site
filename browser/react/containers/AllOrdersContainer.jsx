import React from 'react';
import {connect} from 'react-redux';
import AllOrders from '../components/AllOrders';
import LoginContainer from '../containers/LoginContainer';

export class AllOrdersContainers extends React.Component {
    constructor(props) {
        super(props);
        this.renderUserOrders = this.renderUserOrders.bind(this);
    }

    render () {
        return this.props.currentUser ? this.renderUserOrders() : <LoginContainer />;
    }

    renderUserOrders () {
        return (
            <AllOrders
                currentUser={this.props.currentUser}
                orders={this.props.orders}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        orders: state.auth.orders
    }
}

export default connect(mapStateToProps)(AllOrdersContainers);
