import React from 'react';
import { connect } from 'react-redux';

import { addCartItem } from '../action-creators/users';
import AllProducts from '../components/AllProducts';
import AdminProductsContainer from '../containers/AdminProductsContainer';
import FilterBar from '../components/FilterBar';

export class AllProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({inputValue: evt.target.value})
    }

    renderFilteredProducts() {
        const filteredProducts = this.props.productList.filter(product => product.title.toLowerCase().match(this.state.inputValue));
        return (
            this.props.currentUser && this.props.currentUser.isAdmin ?
                <AdminProductsContainer productList={filteredProducts} /> :
                <AllProducts
                    currentUser={this.props.currentUser}
                    productList={filteredProducts}
                    addingToCart={this.props.addingToCart}
                />
            );
    }

    render() {
        const filteredProducts = this.props.productList.filter(product => product.title.toLowerCase().match(this.state.inputValue));
        return (
            <div>
                <FilterBar
                    handleChange={this.handleChange}
                    inputValue={this.state.inputValue}
                />
                { filteredProducts.length ? this.renderFilteredProducts() : <h3 style={{textAlign: 'center'}}>There are no such games found!</h3> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.products.productList,
        currentUser: state.auth.currentUser
    }
};

const mapDispatchToProps = dispatch => ({addingToCart: (userId, productId, productInfo) => dispatch(addCartItem(userId, productId, productInfo))});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsContainer);
