import React from 'react';
import {connect} from 'react-redux';
import SingleOrder from '../components/SingleOrder';

export class SingleOrderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewItemsOpen: false
        }
        this.handleViewItemsClick = this.handleViewItemsClick.bind(this);
    }

    handleViewItemsClick(evt) {
        evt.preventDefault();
        if (this.state.viewItemsOpen) this.setState({viewItemsOpen: false});
        else this.setState({viewItemsOpen: true});
    }

    render() {
        return (
            <SingleOrder
                handleViewItemsClick={this.handleViewItemsClick}
                order={this.props.order}
                viewItemsOpen={this.state.viewItemsOpen}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    order: ownProps.order
});

export default connect(mapStateToProps)(SingleOrderContainer)
