import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { editProduct } from '../action-creators/products';

import Modal from './Modal';

class EditProductModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.editProductSubmit = this.editProductSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    editProductSubmit(evt) {
        evt.preventDefault();
        const updatedInfo = {
            title: evt.target.title.value,
            description: evt.target.description.value,
            price: evt.target.price.value,
            inventory: evt.target.inventory.value,
            imgUrl: evt.target.imgUrl.value
        }
        this.props.editingProduct(this.props.currentProduct.id, updatedInfo);
        this.props.hideModal();
    }

    render() {
       const product = this.props.currentProduct;
       return (
            <Modal onClose={this.onClose}>
                <div className="modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" style={{fontWeight: 'bold'}}>UPDATE CURRENT PRODUCT</h4>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={this.editProductSubmit} role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="title" className="form-control" id="uLogin" placeholder="Enter product title..." defaultValue={product.title} />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <textarea type="text" name="description" className="form-control" rows="7" placeholder="Enter product description..." defaultValue={product.description} />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="price" className="form-control" id="uPassword" placeholder="Enter product price..." defaultValue={product.price} />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-usd" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="inventory" className="form-control" id="uPassword" placeholder="Enter inventory stock..." defaultValue={product.inventory} />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-list-alt" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="imgUrl" className="form-control" id="uPassword" placeholder="Enter image URL..." defaultValue={product.imgUrl} />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-globe" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-default">Update Product</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentProduct: state.modal.payload
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        editingProduct: (productId, productInfo) => (dispatch(editProduct(productId, productInfo)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProductModal);
