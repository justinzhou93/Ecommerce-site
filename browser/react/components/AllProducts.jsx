import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
        <div className="flex-container">
            <div className="products-header">
                <h2><strong>All Products</strong></h2>
            </div>
            <div className="products-container">
                {props.productList.length && props.productList.map((product) => {
                    return (
                        <div key={product.id} className="products-items">
                            <div className="product-image-box">
                                <img src={product.imgUrl} className="product-img" alt="image" />
                            </div>
                            <div className="product-title">
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                            </div>
                            <div className="product-price">
                                <p>${product.price}</p>
                            </div>
                            <div className="product-price">
                                <a className="button" onClick={() => {props.addingToCart(props.currentUser.id, product.id, {quantity: 1, price: product.price})}}>Add to cart</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
