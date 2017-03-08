import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { addProduct } from '../action-creators/products';

import Modal from './Modal';

/** TODO: add product route from addProduct action-creator */
class AddProductModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.addProductSubmit = this.addProductSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    addProductSubmit(evt) {
        evt.preventDefault();
        const productInfo = {
            title: evt.target.title.value,
            description: evt.target.description.value,
            categories: [evt.target.categories.value],
            price: evt.target.price.value,
            inventory: evt.target.inventory.value,
            imgUrl: evt.target.imgUrl.value
        }
        this.props.addingProduct(productInfo);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" style={{fontWeight: 'bold'}}>ADD NEW PRODUCT</h4>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={this.addProductSubmit} role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="title" className="form-control" id="uLogin" placeholder="Enter product title..." />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <textarea type="text" name="description" className="form-control" rows="7" placeholder="Enter product description..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="categories" className="form-control" id="uPassword" placeholder="Enter product categories..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="price" className="form-control" id="uPassword" placeholder="Enter product price..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-usd" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="inventory" className="form-control" id="uPassword" placeholder="Enter inventory stock..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-list-alt" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="imgUrl" className="form-control" id="uPassword" placeholder="Enter image URL..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon-globe" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-default">Add Product</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        addingProduct: (productInfo) => (dispatch(addProduct(productInfo)))
    }
};

export default connect(null, mapDispatchToProps)(AddProductModal);
