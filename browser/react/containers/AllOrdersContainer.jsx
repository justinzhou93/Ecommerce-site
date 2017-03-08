import React from 'react';
import {connect} from 'react-redux';
import AllOrders from '../components/AllOrders';

export class AllOrdersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.renderUserOrders = this.renderUserOrders.bind(this);
    }

    render () {
        return this.props.currentUser ? this.renderUserOrders() : null;
    }

    renderUserOrders () {
        return (
            <AllOrders
                currentUser={this.props.currentUser}
                orderList={this.props.orderList}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        orderList: state.orders.orderList
    }
}

export default connect(mapStateToProps)(AllOrdersContainer);
