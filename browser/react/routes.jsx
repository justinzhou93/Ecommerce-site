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

import {loadLoggedInUser} from './action-creators/auth';
import {loadAllProducts, loadSingleProduct} from './action-creators/products';
import {loadSingleOrder} from './action-creators/orders';
import {GetUserFromServer} from './action-creators/users';

/* -----------------     COMPONENT ROUTES     ------------------ */

export function Root ({fetchProducts, fetchSingleProduct, fetchUserOrders, fetchSingleOrder, fetchCurrentUser}) {
  return (
    <Router history = {browserHistory} >
      <Route path="/" component = {App} onEnter = {fetchProducts} >
        {/*<IndexRoute component = {App} />*/}
        <Route path="products" component = {AllProductsContainer} onEnter = {fetchProducts} />
        <Route path="login" component = {LoginContainer} />
        <Route path="signup" component = {SignupContainer} />
        <Route path="orders" component = {AllOrdersContainer} onEnter= {fetchCurrentUser} />
        {/*<Route path="users/:userid/orders/:orderid" component = {SingleOrder} onEnter = {fetchSingleOrder} />*/}
          {/*<Route path="users/:userid/orders/:orderid/confirmation" component = {OrderConfirmationContainer} />*/}
        <Route path="products/:productId" component = {SingleProductContainer} onEnter = {fetchSingleProduct} />
        <Route path="user" component = {UserProfileContainer} onEnter = {fetchCurrentUser} />
        {/*<Route path="users/:userid/shoppingCart" component = {CartCheckOutContainer} onEnter = {GetCartFromServer} />*/}

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
  fetchCurrentUser: () => dispatch(loadLoggedInUser()),
  fetchSingleOrder: nextRouterState => dispatch(loadSingleOrder(nextRouterState.params.orderid)),
  fetchUser: (nextRouterState) => {
    // TODO for this action creator, do not pass in userid if you want all users. otherwise, pass in userid for specific user
    const userid = nextRouterState.params.userid;
    dispatch(GetUserFromServer(userid));
  },
  fetchUserCart: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    dispatch(GetCartFromServer(userid));
  }
});

export default connect(null, mapDispatchToProps)(Root);
