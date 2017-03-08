import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../action-creators/modals';
import { addProductReview } from '../action-creators/products';

import Modal from './Modal';

/** TODO: add product route from addProduct action-creator */
class AddReviewModal extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
        this.addReviewSubmit = this.addReviewSubmit.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    addReviewSubmit(evt) {
        evt.preventDefault();
        const reviewData = {
            userid: this.props.currentUser.id,
            title: evt.target.title.value,
            date: evt.target.date.value,
            rating: evt.target.rating.value,
            body: evt.target.body.value
        }
        this.props.addingReview(this.props.currentProduct.id, reviewData);
        this.props.hideModal();
    }

    render() {
        return (
            <Modal onClose={this.onClose}>
                <div className="modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" style={{fontWeight: 'bold'}}>ADD A PRODUCT REVIEW</h4>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={this.addReviewSubmit} role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="title" className="form-control" id="uLogin" placeholder="Enter review title..." />
                                        <label htmlFor="uLogin" className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="date" className="form-control" placeholder="Enter today's date..." />
                                        <label htmlFor="uPassword" className="input-group-addon glyphicon glyphicon glyphicon-time" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" name="rating" className="form-control" id="uPassword" placeholder="Enter a rating from (1-5)..." />
                                        <label className="input-group-addon glyphicon glyphicon glyphicon-star-empty" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <textarea type="text" name="body" className="form-control" rows="7" placeholder="Enter your review here..." />
                                        <label className="input-group-addon glyphicon glyphicon-info-sign" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-default">Add Review</button>
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
        currentProduct: state.modal.payload.currentProduct,
        currentUser: state.modal.payload.currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        addingReview: (productId, reviewData) => dispatch(addProductReview(productId, reviewData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewModal);
