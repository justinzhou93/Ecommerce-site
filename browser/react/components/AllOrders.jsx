import React from 'react';
import SingleOrderContainer from '../containers/SingleOrderContainer'

export default function (props) {
  if (props.currentUser) {
    const userOrders = props.currentUser.orders;
    return (
      <div className="flex-container">
          <div className="my-account-header">
              <h2 className="my-account-text">My Orders</h2>
          </div>
          {
            userOrders.map(order => {
              return <SingleOrderContainer key={order.id} order={order} />
            })
          }
      </div>
    );

  } else {
    return <h3>Loading Past Orders...</h3>
  }
}
