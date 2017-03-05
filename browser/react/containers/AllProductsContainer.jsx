import React from 'react';
import { connect } from 'react-redux';

import AllProducts from '../components/AllProducts';
import AdminProductsContainer from '../containers/AdminProductsContainer';

export class AllProductsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AllProducts productList={this.props.productList} />

                {this.props.currentUser && this.props.currentUser.isAdmin ? <AdminProductsContainer productList={this.props.productList} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList,
        currentUser: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(AllProductsContainer);
