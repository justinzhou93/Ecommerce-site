import React from 'react';
import { Link } from 'react-router';

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
                        <div key={product.id}className="admin-products">
                          <div className="admin-product-img-box">
                            <img src={product.imgUrl} className="admin-product-img" />
                          </div>
                          <div className="admin-product-desc">
                            <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>Product Description</h4>
                            {product.description}
                          </div>
                          <div className="admin-product-price">
                            <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>Price</h4><br />
                              ${product.price}
                          </div>
                          <div className="admin-product-inv">
                            <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>Inventory</h4><br />
                                {product.inventory}
                          </div>
                          <div className="admin-links">
                            <a className="admin-remove-link">Edit</a><br />
                            <a onClick={props.showDeleteWarningModal} value={product.id} className="admin-remove-link">Remove</a>
                          </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
