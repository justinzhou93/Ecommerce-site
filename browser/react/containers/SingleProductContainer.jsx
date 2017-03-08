import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../action-creators/users';

import { loadModal } from '../action-creators/modals';

import { ADD_REVIEW_MODAL } from '../modals/modaltypes';
import SingleProduct from '../components/SingleProduct';

export class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.addToCartOnClick = this.addToCartOnClick.bind(this);
        this.handleAddReviewOnClick = this.handleAddReviewOnClick.bind(this);
    }

    addToCartOnClick(evt) {
        evt.preventDefault();
        this.props.addingToCart(this.props.currentUser.id, this.props.currentProduct.id, {quantity: 1, price: this.props.currentProduct.price})
    }

    handleAddReviewOnClick(evt) {
        evt.preventDefault();
        this.props.loadModal(ADD_REVIEW_MODAL, {currentProduct: this.props.currentProduct, currentUser: this.props.currentUser})
    }

    render() {
        return (
            <SingleProduct
                currentProduct={this.props.currentProduct}
                addToCartOnClick={this.addToCartOnClick}
                handleAddReviewOnClick={this.handleAddReviewOnClick}
            />
        )
    }
}

const mapStateToProps = state => ({
    currentProduct: state.products.currentProduct,
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => {
    return {
        loadModal: (modelType, payload) => dispatch(loadModal(modelType, payload)),
        addingToCart: (userId, productId, productInfo) => dispatch(addCartItem(userId, productId, productInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer);
