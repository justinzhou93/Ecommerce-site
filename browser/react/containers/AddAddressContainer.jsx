import React from 'react';
import { connect } from 'react-redux';
import AddAddress from '../components/AddAddress';
import {addNewAddress} from '../action-creators/users';

export class AddAddressContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
    }

    handleAddressSubmit(evt) {
        evt.preventDefault();
        const addressInfo = {
            address1: evt.target.address1.value,
            address2: evt.target.address2.value,
            city: evt.target.city.value,
            state: evt.target.state.value,
            zipCode: +evt.target.zipcode.value
        }
        this.props.addingNewAddress(this.props.currentUser.id, addressInfo);
    }

    render() {
        return (
            <AddAddress
                handleAddressSubmit={this.handleAddressSubmit}
            />
        );
    }
}

const mapStateToProps = state => ({currentUser: state.auth.currentUser});

const mapDispatchToProps = dispatch => {
    return {
        addingNewAddress: (userId, addressInfo) => (dispatch(addNewAddress(userId, addressInfo)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressContainer);
