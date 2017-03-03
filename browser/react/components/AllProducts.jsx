import React from 'react';

export default function (props) {
    return (
        <div>
            {props.productList && props.productList.map((product) => {
                return <ul key={product.id}>{product.title}</ul>
            })}
        </div>
    );
}
