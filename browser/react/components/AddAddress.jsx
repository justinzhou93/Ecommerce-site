import React from 'react';

export default function (props) {
    return (
        <div className="flex-container">
            <div className="my-account-header">
                <h2 className="my-account-text">Add Address</h2>
            </div>
            <div className="address-items">
                <div className="address-form">
                    <form onSubmit={props.handleAddressSubmit}>
                        <div className="form-blocks">
                            <h5 id="address-headers">Street Address</h5>
                            <input
                                id="address1"
                                name="address1"
                                type="text"
                                placeholder="Street and number"
                                className="input-xlarge address-input"
                            />
                        </div>

                        <div className="form-blocks">
                            <h5 id="address-headers">Apartment, suite, etc.</h5>
                            <input
                                id="address2"
                                name="address2"
                                type="text"
                                placeholder="Apartment, suite, unit, building, floor, etc."
                                className="input-xlarge address-input"
                            />
                        </div>

                        <div className="form-blocks">
                            <h5 id="address-headers">City</h5>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="City"
                                className="input-xlarge address-input"
                            />
                        </div>

                        <div className="form-blocks">
                            <h5 id="address-headers">State</h5>
                            <input
                                id="state"
                                name="state"
                                type="text"
                                placeholder="State"
                                className="input-xlarge address-input"
                            />
                        </div>

                        <div className="form-blocks">
                            <h5 id="address-headers">Zip Code</h5>
                            <input
                                id="zipcode"
                                name="zipcode"
                                type="text"
                                placeholder="Zip Code"
                                className="input-xlarge address-input"
                            />
                        </div>
                        <div className="control-group">
                            <button type="submit" className="btn btn-success">Add Address</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
