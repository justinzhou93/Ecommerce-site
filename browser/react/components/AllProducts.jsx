import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
        <div className="products-container">
            {props.productList.length && props.productList.map((product) => {
                return (
                    <div key={product.id} className="products-items">
                        <img src={product.imgUrl} className="product-images" alt="image" />
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        <h4 className="price">${product.price}</h4>
                        <a className="button" href="#">Add to cart</a>
				    </div>
                )
            })}
        </div>
    );
}
