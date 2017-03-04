import React from 'react';

export default function (props) {
    return (
        <div>
            {props.currentProduct &&
                <h2>{props.currentProduct.title}</h2>
            }
        </div>
    );
}
