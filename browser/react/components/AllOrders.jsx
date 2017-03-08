import React from 'react';
import SingleOrderContainer from '../containers/SingleOrderContainer'

export default function (props) {
  if (props.currentUser && !props.currentUser.isAdmin) {
    return (
      <div className="flex-container">
          <div className="my-account-header">
              <h2 className="my-account-text">My Orders</h2>
          </div>
          {
            props.currentUser.length ? props.currentUser.orders.map(order => {
              return <SingleOrderContainer key={order.id} order={order} />
            }) : <h3 style={{marginTop: '2em'}}>You have made no orders!</h3>
          }
      </div>
    );
  } else if (props.currentUser && props.currentUser.isAdmin) {
    return (
      <div className="flex-container">
          <div className="my-account-header">
              <h2 className="my-account-text">My Orders</h2>
          </div>
          {
            props.orderList.length ? props.orderList.map(order => {
              return <SingleOrderContainer key={order.id} order={order} />
            }) : <h3 style={{marginTop: '2em'}}>There are no orders!</h3>
          }
      </div>
    );
  } else {
    return <h3>Loading Orders...</h3>
  }

}
