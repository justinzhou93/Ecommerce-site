import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderLoginSignup = this.renderLoginSignup.bind(this);
        this.renderLogout = this.renderLogout.bind(this);
    }

    render() {
        return (
            <div className="banner">
                <div className="logo">
                    <h1><Link to="/" className="m_1">Boardgames Galore</Link></h1>
                </div>
                <div className="menu">
                    <ul className="megamenu skyblue">
                        <li><Link to={'/products'} className="color2">Products</Link></li>
                        <li><Link to={'/categories'} className="color4">Categories</Link></li>
                        {this.props.currentUser ? this.renderLogout() : this.renderLoginSignup()}
                    </ul>
                </div>
                <ul className="megamenu skyblue cart-link">
                    <li><a className="color2">Cart</a></li>
                </ul>
            </div>
        );
    }

    renderLogout() {
        return (
            <div className="megamenu skyblue">
                <li><Link to={'/orders'} className="color4">Orders</Link></li>
                <li><Link to={'/user'} className="color4">My Account</Link></li>
                <li><a className="color4" onClick={this.props.loggingOut}>Logout</a></li>
            </div>
        );
    }

    renderLoginSignup() {
        return (
            <div className="megamenu skyblue">
                <li><a onClick={this.props.showSignupMenu} className="color4">Sign Up</a></li>
                <li><a onClick={this.props.showLoginMenu} className="color4">Login</a></li>
            </div>
        );
    }
}
