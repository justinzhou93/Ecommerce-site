import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { deleteProduct } from '../action-creators/products';

import Modal from './Modal';

/** TODO: delete route from deleteProduct thunk */
class DeleteWarningModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.deleteProductSubmit = this.deleteProductSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    deleteProductSubmit(evt) {
        evt.preventDefault();
        this.props.deletingProduct(this.props.currentProduct.id)
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" style={{fontWeight: 'bold'}}>WARNING: DELETING PRODUCT PERMANENTLY!</h4>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this product?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={this.deleteProductSubmit} className="btn btn-default" data-dismiss="modal">DELETE PRODUCT</button>
                        <button type="button" onClick={this.props.hideModal} className="btn btn-default">Cancel</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentProduct: state.products.currentProduct
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        deletingProduct: productId => (dispatch(deleteProduct(productId)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteWarningModal);
