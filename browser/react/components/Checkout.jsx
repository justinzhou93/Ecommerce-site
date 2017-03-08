import React from 'react';
import CartItem from './CartItem';
export default class Checkout extends React.component {
    constructor(props){
      super(props);
    }

    // TODO: calculate and display total price (maybe make the number of items flexible or removable)
    // TODO: attach "render" event handlers (written below) to the proper buttons
    // TODO: checkout button to place order and redirect to front page/order confirmation page
    // TODO: add forms to be able to add new credit cards and addresses

    render(){
      return (
        <div className="flex-container">
            <div className="my-account-header">
                <h2 className="my-account-text">Checkout</h2>
            </div>
            <div>
              {
                props.currentUser && props.currentUser.lineitems.map(lineitem => {
                  return <CartItem key={lineitem.id} item={lineitem} />
                })
              }
              <span>${props.currentUser.lineitems.reduce((accum, lineitem) => accum + lineitem.price, 0)}</span>
            </div>
            <div className="user-profile-items">
                <div className="profile-items">
                    <div className="profile-header">
                        <h2 className="profile-item-header">Address Book</h2>
                        <Link to={'/address/add'} className="header-link-text">Add a New Address</Link>
                    </div>
                    <div>
                        {
                            this.props.currentUser.addresses.map((address) => {
                                return (
                                    <address key={address.id} className="managed-items" onClick={this.props.selectAddressSubmit}>
                                        {address.address1} {address.address2}<br />
                                        {address.city}, {address.state}<br />
                                        <Link to={'/address/edit'} className="small-link-text">Edit</Link>
                                        <span><a className="small-link-text">Delete</a></span>
                                    </address>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="profile-items" />
            </div>
            <div className="user-profile-items">
                <div className="profile-items">
                    <div>
                        {
                            this.props.currentUser.credit_cards.map((card) => {
                                return (
                                    <button onClick={this.props.selectCardSubmit} key={card.id}>
                                        {card.number}
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="profile-items">
                <button onClick={this.props.submitOrder}>Submit Order</button>
            </div>
        </div>
      );
    }
}
