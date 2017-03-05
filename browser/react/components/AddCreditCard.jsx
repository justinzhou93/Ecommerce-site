import React from 'react';

export default function (props) {
    return (
        <div className="container">
            <form className="form-horizontal" role="form">
                <fieldset>
                    <legend>Payment</legend>
                    <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="card-holder-name">Name on Card</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="card-holder-name" id="card-holder-name" placeholder="Card Holder's Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="card-number">Card Number</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Debit/Credit Card Number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="expiry-month">Expiration Date</label>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-xs-3">
                                    <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                                        <option>Month</option>
                                        <option value="01">Jan (01)</option>
                                        <option value="02">Feb (02)</option>
                                        <option value="03">Mar (03)</option>
                                        <option value="04">Apr (04)</option>
                                        <option value="05">May (05)</option>
                                        <option value="06">June (06)</option>
                                        <option value="07">July (07)</option>
                                        <option value="08">Aug (08)</option>
                                        <option value="09">Sep (09)</option>
                                        <option value="10">Oct (10)</option>
                                        <option value="11">Nov (11)</option>
                                        <option value="12">Dec (12)</option>
                                    </select>
                                </div>
                                <div className="col-xs-3">
                                    <select className="form-control" name="expiry-year">
                                        <option value="13">2013</option>
                                        <option value="14">2014</option>
                                        <option value="15">2015</option>
                                        <option value="16">2016</option>
                                        <option value="17">2017</option>
                                        <option value="18">2018</option>
                                        <option value="19">2019</option>
                                        <option value="20">2020</option>
                                        <option value="21">2021</option>
                                        <option value="22">2022</option>
                                        <option value="23">2023</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="cvv">Card CVV</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" name="cvv" id="cvv" placeholder="Security Code" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-9">
                            <button type="submit" className="btn btn-success">Add Credit Card</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
