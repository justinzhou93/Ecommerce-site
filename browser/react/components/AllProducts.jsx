import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
        <div>
            {props.productList && props.productList.map((product) => {
                return (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <h2>{product.title}</h2>
                    </Link>
                )
            })}
        </div>
    );
}
