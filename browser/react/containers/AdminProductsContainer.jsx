import React from 'react';
import { connect } from 'react-redux';

import AdminProducts from '../components/AdminProducts';

import { loadSingleProduct } from '../action-creators/products';
import { loadModal } from '../action-creators/modals';
import { ADD_PRODUCT_MODAL, DELETE_WARNING_MODAL } from '../modals/modaltypes';

/** TODO: set store state for currentProductToBeDeleted, use that product.id to delete product in Modal */
export class AdminProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.showAddProductModal = this.showAddProductModal.bind(this);
    }

    showAddProductModal() {
        this.props.loadModal(ADD_PRODUCT_MODAL);
    }

    render() {
        return (
            <AdminProducts
                loadModal={this.props.loadModal}
                showAddProductModal={this.showAddProductModal}
                loadCurrentProduct={this.props.loadCurrentProduct}
                productList={this.props.productList}
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
        loadModal: (modelType, payload) => dispatch(loadModal(modelType, payload)),
        loadCurrentProduct: productId => dispatch(loadSingleProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);
