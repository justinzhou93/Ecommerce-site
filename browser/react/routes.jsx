import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { connect } from 'react-redux';

/* -----------------   IMPORTED COMPONENTS   ------------------ */

import App from './components/App';
// import OrderContainer from './containers/AllOrdersContainer';
import AllProductsContainer from './containers/AllProductsContainer';
// import CartCheckOutContainer from './containers/CartCheckOutContainer';
// import LoginContainer from './containers/LoginContainer';
// import OrderConfirmationContainer from './containers/OrderConfirmationContainer';
// // import SignupContainer from './container/SignupContainer';
// import SingleOrder from './containers/SingleOrder';
// import SingleProductContainer from './containers/SingleProductContainer';
// import UserProfileContainer from './containers/UserProfileContainer';


// TODO need to create these thunk action creators (axios calls) in the action-creator files
import {loadAllProducts, loadSingleProduct} from './action-creators/products';
import {GetOrdersFromServer} from './action-creators/orders';
import {GetUserFromServer} from './action-creators/users';
// TODO - remember to query for cart inside of orders because merged cart and lineitems
import {GetCartFromServer} from './action-creators/orders'

/* -----------------     COMPONENT ROUTES     ------------------ */

export function Root ({fetchProducts, fetchSingleProduct, fetchUserOrders, fetchSingleOrder, fetchUser}) {
  return (
    <Router history = {browserHistory} >
      <Route path="/" component = {App} onEnter = {fetchProducts} >
        {/*<IndexRoute component = {App} />*/}
        <Route path="products" component = {AllProductsContainer} onEnter = {fetchProducts} />
        {/*<Route path="login" component = {LoginContainer} />
        {/*<Route path="signup" component = {SignupContainer} />*/}
        {/*<Route path="users/:userid/orders" component = {OrderContainer} onEnter = {fetchUserOrders} />
        <Route path="users/:userid/orders/:orderid" component = {SingleOrder} onEnter = {fetchSingleOrder} />
          <Route path="users/:userid/orders/:orderid/confirmation" component = {OrderConfirmationContainer} />
        <Route path="products/:productid" component = {SingleProductContainer} onEnter = {fetchSingleProduct} />
        <Route path="users/:userid" component = {UserProfileContainer} onEnter = {fetchUser} />
        <Route path="users/:userid/shoppingCart" component = {CartCheckOutContainer} onEnter = {GetCartFromServer} />*/}

        {/*ADMIN ROUTES*/}
        {/*<Route path="users/?admin" component = {UserProfileContainer} />
        <Route path="orders/?admin" component = {UserProfileContainer} />
        <Route path="products/?admin" component = {UserProfileContainer} />*/}
      </Route>
    </Router>
  );
}

/* -----------------    CONTAINER/ONENTER HOOKS    ------------------ */

const mapStateToDispatch = dispatch => ({
  fetchProducts: () => {
    dispatch(loadAllProducts());
  },
  fetchSingleProduct: (nextRouterState) => {
    dispatch(loadSingleProduct(nextRouterState.params.productId));
  },
  fetchUserOrders: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    dispatch(GetOrdersFromServer(userid));
  },
  // TODO do we need this? to keep consistent with other thunk action creators, we can just use previous (fetchUserOrders)
  // with optional second parameter (orderid). If orderid is undefined, then return all orders, else return single order...
  fetchSingleOrder: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    const orderid = nextRouterState.params.orderid;
    dispatch(GetOrdersFromServer(userid, orderid));
  },
  fetchUsers: (nextRouterState) => {
    // TODO for this action creator, do not pass in userid if you want all users. otherwise, pass in userid for specific user
    const userid = nextRouterState.params.userid;
    dispatch(GetUserFromServer(userid));
  },
  fetchUserCart: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    dispatch(GetCartFromServer(userid));
  }
})

export default connect(null, mapStateToDispatch)(Root);
