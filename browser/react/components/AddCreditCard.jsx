import React from 'react';
import {connect} from 'react-redux';

import {addNewCreditCard} from '../action-creators/users';

export class AddCreditCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddCard = this.handleAddCard.bind(this);
    }

    handleAddCard(evt) {
        evt.preventDefault();
        const cardInfo = {
            name: evt.target.name.value,
            number: evt.target.number.value,
            month: evt.target.month.value,
            year: evt.target.year.value,
            CCV: evt.target.CCV.value
        }

        this.props.addingNewCreditCard(this.props.currentUser.id, cardInfo);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddCard} className="form-horizontal" role="form">
                    <fieldset>
                        <legend className="credit-card-header">Add New Credit Card</legend>
                        <div className="form-group">
                            <label className="col-sm-3 control-label" htmlFor="card-holder-name">Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="name" id="card-holder-name" placeholder="Card Holder's Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label" htmlFor="card-number">Card Number</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" name="number" id="card-number" placeholder="Debit/Credit Card Number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label" htmlFor="expiry-month">Expiration Date</label>
                            <div className="col-sm-9">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <select className="form-control col-sm-2" name="month" id="expiry-month">
                                            <option>Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-3">
                                        <select className="form-control" name="year">
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
                                <input type="text" className="form-control" name="CCV" id="cvv" placeholder="CVV" />
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
}

/** -------- ADD CREDIT CARD CONTAINER ---------------- */

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: ownProps.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addingNewCreditCard: (userId, cardInfo) => {dispatch(addNewCreditCard(userId, cardInfo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCreditCard);
