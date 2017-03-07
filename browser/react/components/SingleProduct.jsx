import React from 'react';

export default function (props) {
    if (props.currentProduct) {
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
                        <a onClick={props.addToCartOnClick} className="button">Add to cart</a>
                    </div>
                </div>
                <div className="sing-product-reviews">
                    <h5>Reviews would go here</h5>
                </div>
            </div>
        );
    } else {
        return <h6>Loading product...</h6>
    }
}
