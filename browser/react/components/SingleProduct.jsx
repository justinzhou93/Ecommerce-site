import React from 'react';
// import Star from 'react-star-rating';

export default function (props) {
    if (props.currentProduct) {
        const productReviews = props.currentProduct.reviews;
        return (
            <div className="sing-product-container">
                <div className="sing-product-img-container">
                    <div className="sing-product-img">
                        <img src={props.currentProduct.imgUrl} className="product-images" />
                    </div>
                    <div className="sing-product-desc">
                        <h2>{props.currentProduct.title}</h2>
                        <p>{props.currentProduct.description}</p>
                        <h4 className="price">${props.currentProduct.price}</h4>
                        <a className="button" href="#">Add to cart</a>
                    </div>
                </div>
                <div className="sing-product-reviews">
                    <div className = "reviews-title">
                      <h1>REVIEWS</h1>
                    </div>
                      {
                        // Each individual review
                        productReviews.map(review => {
                          return (
                            <div key={review.id} className = "sing-product-desc">
                              <h2>{review.title}</h2>
                              {
                                // <Star totalStars={review.rating} />
                              }
                              <p>{review.body}</p>
                            </div>
                          )
                        })
                      }
                </div>
            </div>
        );
    } else {
        return <h6>Loading product...</h6>
    }
}
