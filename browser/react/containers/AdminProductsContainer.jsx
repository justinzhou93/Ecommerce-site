import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../action-creators/products';

import AdminProducts from '../components/AdminProducts';

export class AdminProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAddProduct(evt) {
        evt.preventDefault();
        const productInfo = {

        }
        this.props.addingProduct(productInfo);
    }

    handleDelete(evt) {
        evt.preventDefault();
        this.props.deletingProduct(productId);
    }

    render() {
        return (
            <AdminProducts
                productList={this.props.productList}
                handleAddProduct={this.handleAddProduct}
                handleDelete={this.handleDelete}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productList: ownProps.productList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addingProduct: (productInfo) => (dispatch(addProduct(productInfo))),
        deletingProduct: (productId) => (dispatch(deleteProduct(productId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);
