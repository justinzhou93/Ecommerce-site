import React from 'react';

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
    }

    handleRemoveCartItem(evt) {
        evt.preventDefault();
        this.props.removingCartItem(this.props.userId, this.props.item.id)
    }

    render() {
        const item = this.props.item;
        return (
            <div key={item.id}className="cart-items-box">
                <div className="cart-product-img-box">
                    <img src={item.product.imgUrl} className="admin-product-img" />
                </div>
                <div className="admin-product-title" style={{width: '20%'}}>
                    <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>{item.product.title}
                    </h4>
                </div>
                <div className="cart-product-inv">
                    <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>Quantity</h4><br />
                        {item.quantity}
                </div>
                <div className="cart-product-price">
                    <h4 style={{fontWeight: 'bold', marginBottom: '0'}}>Price</h4><br />
                        ${item.price}
                </div>
                <div className="cart-links">
                    <a onClick={this.handleRemoveCartItem} className="admin-remove-link">Remove</a>
                </div>
            </div>
        );
    }
}
