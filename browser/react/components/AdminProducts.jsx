import React from 'react';
import { Link } from 'react-router';

import AdminSingleProduct from './AdminSingleProduct';

export default function (props) {
    return (
        <div className="flex-container">
            <div className="admin-products-header">
                <h2 className="my-account-text">Current Product List</h2>
                <button onClick={props.showAddProductModal} className="admin-add-product">Add Product</button>
            </div>
            <div className="admin-products-list">
                {props.productList && props.productList.map((product) => {
                    return (
                        <AdminSingleProduct
                            key={product.id}
                            product={product}
                            loadModal={props.loadModal}
                        />
                    );
                })}
            </div>
        </div>
    );
}
