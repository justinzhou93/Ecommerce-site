import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../action-creators/users';

import SingleProduct from '../components/SingleProduct';

export class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.addToCartOnClick = this.addToCartOnClick.bind(this);
    }

    addToCartOnClick() {
        this.props.addingToCart(this.props.currentUser.id, this.props.currentProduct.id)
    }

    render() {
        return (
            <SingleProduct
                currentProduct={this.props.currentProduct}
                addToCartOnClick={this.addToCartOnClick}
            />
        )
    }
}

const mapStateToProps = state => ({
    currentProduct: state.products.currentProduct,
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({addingToCart: (userId, productId) => dispatch(addCartItem(userId, productId))});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer);
