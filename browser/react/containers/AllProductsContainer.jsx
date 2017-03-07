import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../action-creators/users';
import AllProducts from '../components/AllProducts';
import AdminProductsContainer from '../containers/AdminProductsContainer';

export class AllProductsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                this.props.currentUser && this.props.currentUser.isAdmin ? <AdminProductsContainer productList={this.props.productList} /> :    <AllProducts
                    currentUser={this.props.currentUser}
                    productList={this.props.productList}
                    addingToCart={this.props.addingToCart}
                />
                }
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

const mapDispatchToProps = dispatch => ({addingToCart: (userId, productId, productInfo) => dispatch(addCartItem(userId, productId, productInfo))});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsContainer);
