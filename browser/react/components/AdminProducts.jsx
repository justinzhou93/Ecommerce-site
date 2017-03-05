import React from 'react';
import { Link } from 'react-router';

export default function (props) {
    return (
        <div className="container">
            <h3>Admin Products</h3>
            <div className="row">
                <form className="form-horizontal" onSubmit={props.handleAddProduct}>
                    <fieldset>

                        <h2>New Product</h2>

                        {/*Product Title*/}
                        <div className="control-group">
                            <label className="control-label">Product Title</label>
                            <div className="controls">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    className="input-xlarge"
                                />
                            </div>
                        </div>

                        {/*Product Description*/}
                        <div className="control-group">
                            <label className="control-label">Product Description</label>
                            <div className="controls">
                                <textarea
                                    className="form-control"
                                    cols="50"
                                    id="description"
                                    name="description"
                                    placeholder="Enter the product's description..."
                                    rows="5"
                                />
                            </div>
                        </div>

                        {/*Product Price*/}
                        <div className="control-group">
                            <label className="control-label">Price</label>
                            <div className="controls">
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    placeholder="price"
                                    className="input-xlarge"
                                />
                            </div>
                        </div>

                        {/*Product Inventory*/}
                        <div className="control-group">
                            <label className="control-label">Inventory</label>
                            <div className="controls">
                                <input
                                    id="inventory"
                                    name="inventory"
                                    type="text"
                                    placeholder="Inventory"
                                    className="input-xlarge"
                                />
                            </div>
                        </div>

                        {/*Image URL*/}
                        <div className="control-group">
                            <label className="control-label">Image URL</label>
                            <div className="controls">
                                <input
                                    id="imgUrl"
                                    name="imgUrl"
                                    type="text"
                                    placeholder="Add Image URL"
                                    className="input-xlarge"
                                />
                                <p className="help-block" />
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
