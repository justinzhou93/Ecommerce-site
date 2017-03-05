import React from 'react';

export default function (props) {
    return (
        <div className="container">
            <div className="row">
                <form className="form-horizontal" onSubmit={props.handleAddressSubmit}>
                    <fieldset>

                        <h2>Address</h2>

                        {/*address line1 input*/}
                        <div className="control-group">
                            <label className="control-label">Address Line 1</label>
                            <div className="controls">
                                <input
                                    id="address1"
                                    name="address1"
                                    type="text"
                                    placeholder="address line 1"
                                    className="input-xlarge"
                                />
                                <p className="help-block">Street address, P.O. box, company name, c/o</p>
                            </div>
                        </div>

                        {/*address line2 input*/}
                        <div className="control-group">
                            <label className="control-label">Address Line 2</label>
                            <div className="controls">
                                <input
                                    id="address2"
                                    name="address2"
                                    type="text"
                                    placeholder="address line 2"
                                    className="input-xlarge"
                                />
                                <p className="help-block">Apartment, suite , unit, building, floor, etc.</p>
                            </div>
                        </div>

                        {/*city input*/}
                        <div className="control-group">
                            <label className="control-label">City / Town</label>
                            <div className="controls">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    placeholder="city"
                                    className="input-xlarge"
                                />
                                <p className="help-block" />
                            </div>
                        </div>

                        {/*state input*/}
                        <div className="control-group">
                            <label className="control-label">State</label>
                            <div className="controls">
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    placeholder="state"
                                    className="input-xlarge"
                                />
                                <p className="help-block" />
                            </div>
                        </div>

                        {/*zip code input*/}
                        <div className="control-group">
                            <label className="control-label">Zip Code</label>
                            <div className="controls">
                                <input
                                    id="zipcode"
                                    name="zipcode"
                                    type="text"
                                    placeholder="zip code"
                                    className="input-xlarge"
                                />
                                <p className="help-block" />
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Address</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
