import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { connect } from 'react-redux';

/* -----------------   IMPORTED COMPONENTS   ------------------ */

import App from './components/App';
import AllOrdersContainer from './containers/AllOrdersContainer';
import AllProductsContainer from './containers/AllProductsContainer';
// import CartCheckOutContainer from './containers/CartCheckOutContainer';
import LoginContainer from './containers/LoginContainer';
// import OrderConfirmationContainer from './containers/OrderConfirmationContainer';
import SignupContainer from './containers/SignupContainer';
// import SingleOrder from './containers/SingleOrderContainer';
import SingleProductContainer from './containers/SingleProductContainer';
import UserProfileContainer from './containers/UserProfileContainer';

import AddAddressContainer from './containers/AddAddressContainer';
import EditReviewContainer from './containers/EditReviewContainer';

import {loadAllProducts, loadSingleProduct} from './action-creators/products';
import {loadSingleOrder} from './action-creators/orders';

/* -----------------     COMPONENT ROUTES     ------------------ */

export function Root ({fetchProducts, fetchSingleProduct, fetchUserOrders, fetchSingleOrder, fetchCurrentUser}) {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App} onEnter={fetchProducts}>
        {/*<IndexRoute component = {App} />*/}
        <Route path="products" component={AllProductsContainer} onEnter={fetchProducts} />
        <Route path="products/:productId" component={SingleProductContainer} onEnter={fetchSingleProduct} />

        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />

        <Route path="orders" component={AllOrdersContainer} />

        <Route path="user" component={UserProfileContainer} />
        <Route path="address/add" component={AddAddressContainer} />

        {/*<Route path="users/:userid/shoppingCart" component = {CartCheckOutContainer} onEnter = {GetCartFromServer} />*/}
        {/*<Route path="users/:userid/orders/:orderid/confirmation" component = {OrderConfirmationContainer} />*/}
        {/*ADMIN ROUTES*/}
        {/*<Route path="users/?admin" component = {UserProfileContainer} />
        <Route path="orders/?admin" component = {UserProfileContainer} />
        <Route path="products/?admin" component = {UserProfileContainer} />*/}
      </Route>
    </Router>
  );
}

/* -----------------    CONTAINER/ONENTER HOOKS    ------------------ */

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(loadAllProducts()),
  fetchSingleProduct: nextRouterState => dispatch(loadSingleProduct(nextRouterState.params.productId)),
  fetchSingleOrder: nextRouterState => dispatch(loadSingleOrder(nextRouterState.params.orderid)),
  fetchUserCart: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    dispatch(GetCartFromServer(userid));
  }
});

export default connect(null, mapDispatchToProps)(Root);
