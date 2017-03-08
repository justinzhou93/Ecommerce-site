import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function (props) {
    const changeDate = (dateStr) => dateStr.slice(0, 10).split('-').join('/');
    if (props.currentProduct) {
        const productReviews = props.currentProduct.reviews;
        return (
            <div>
                <div className="sing-product-container">
                    <div className="sing-product-img-container">
                        <img src={props.currentProduct.imgUrl} className="sing-product-img" />
                    </div>
                    <div className="sing-product-desc-box">
                        <div className="sing-product-desc">
                            <h2>{props.currentProduct.title}</h2>
                            <p>{props.currentProduct.description}</p>
                        </div>
                        <div className="sing-product-cart">
                            <b className="sing-product-price" style={{fontSize: '20px'}}>${props.currentProduct.price}</b>
                            <button onClick={props.addToCartOnClick} type="button" className="btn btn-primary" style={{borderRadius: '4px'}}>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="reviews-container">
                        <div className="reviews-title-header">
                            <div className="reviews-header-box" />
                            <div className="reviews-header-box">
                                <h3 className="reviews-title-heading">Reviews</h3>
                            </div>
                            <div className="reviews-header-box" style={{textAlign: 'right', alignSelf: 'center'}}>
                                <span><a className="review-add-link" onClick={props.handleAddReviewOnClick}>Add a review!</a></span>
                            </div>
                        </div>
                        {
                            // Each individual review
                            productReviews.length ? productReviews.map(review => {
                                return (
                                    <div key={review.id} className="sing-review">
                                        <h4>{review.title}</h4>
                                        <StarRatingComponent name="boardgame-rating" starCount={5} value={review.rating} />
                                        <h6>{changeDate(review.date)}</h6>
                                        <p>{review.body}</p>
                                    </div>
                                )
                            }) : <h4 style={{marginTop: '20px', marginBottom: '2em'}}>This product currently has no reviews.</h4>
                        }
                </div>
            </div>
        );
    } else {
        return <h6>Loading product...</h6>
    }
}
