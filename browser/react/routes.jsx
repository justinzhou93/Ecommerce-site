// where you put ReactDOM.render...
import React from 'react';
import reactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

/* -----------------   IMPORTED COMPONENTS   ------------------ */

import Home from './components/Home'
import Root from './components/Root';
import OrderContainer from './containers/AllOrdersContainer';
import ProductContainer from './containers/AllProductsContainer';
import CartCheckOutContainer from './containers/CartCheckOutContainer';
import LoginContainer from './containers/LoginContainer';
import OrderConfirmationContainer from './containers/OrderConfirmationContainer';
import SignupContainer from './container/SignupContainer';
import SingleOrder from './containers/SingleOrder';
import SingleProductContainer from './containers/SingleProductContainer';
import UserProfileContainer from './containers/UserProfileContainer';


// TODO need to create these thunk action creators (axios calls) in the action-creator files
import {loadAllProducts} from './action-creators/products';
// TODO - remember to query for cart inside of orders because merged cart and lineitems
import {GetOrdersFromServer, GetSingleOrder} from './action-creators/orders';
import {GetUserFromServer} from './action-creators/users';


/* -----------------     COMPONENT ROUTES     ------------------ */

const Routes = ({fetchProducts, fetchUserOrders, fetchSingleOrder, fetchUser}) => (
  <Router history = {browserHistory} >
    <Route path="/" component = {Root} onEnter = {fetchProducts} >
      <IndexRoute component = {Home} />
      <Route path="products" component = {ProductContainer} />
      <Route path="login" component = {LoginContainer} />
      <Route path="signup" component = {SignupContainer} />
      <Route path="users/:userid/orders" component = {OrderContainer} onEnter = {fetchUser} />
      <Route path="users/:userid/orders/:orderid" component = {SingleOrder} onEnter = {fetchSingleOrder} />
        <Route path="users/:userid/orders/:orderid/confirmation" component = {OrderConfirmationContainer} />
      <Route path="products/:productid" component = {SingleProductContainer} />
      <Route path="users/:userid" component = {UserProfileContainer} onEnter = {fetchUser} />
      <Route path="users/:userid/shoppingCart" component = {CartCheckOutContainer} onEnter = {fetchUser} />

      {/*ADMIN ROUTES*/}
      <Route path="users/?admin" component = {UserProfileContainer} />
      <Route path="orders/?admin" component = {UserProfileContainer} />
      <Route path="products/?admin" component = {UserProfileContainer} />
    </Route>
  </Router>
)

/* -----------------    CONTAINER/ONENTER HOOKS    ------------------ */

const mapStateToProps = null;

const mapStateToDispatch = dispatch => ({
  fetchProducts: () => {
    // TODO for this action creator, do not pass in productid if you want all products. otherwise, pass in productid for specific product
    const productid = nextRouterState.params.productid;
    dispatch(loadAllProducts(productid));
  },
  // TODO do we need this? to keep consistent with other thunk action creators, we can just use previous (fetchUserOrders)
  // with optional second parameter (orderid). If orderid is undefined, then return all orders, else return single order...
  fetchSingleOrder: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    const orderid = nextRouterState.params.orderid;
    dispatch(GetSingleOrder(orderid));
  },
  fetchUser: (nextRouterState) => {
    // TODO for this action creator, do not pass in userid if you want all users. otherwise, pass in userid for specific user
    const userid = nextRouterState.params.userid;
    dispatch(GetUserFromServer(userid));
  },
  fetchUserCart: (nextRouterState) => {
    const userid = nextRouterState.params.userid;
    dispatch(GetCartFromServer(userid));
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(Routes);
