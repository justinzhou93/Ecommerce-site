import React from 'react';
import SingleOrderContainer from '../containers/SingleOrderContainer'

export default function (props) {
  if (props.currentUser) {
    const userOrders = props.currentUser.orders;
    return (
      <div>
        <h3>Orders</h3>
          {
            userOrders.map(order => {
              return (
                <ul key={order.id}>
                  <SingleOrderContainer order={order} />
                </ul>
            )})
          }
      </div>
    )
  } else {
    return <h3>Loading Past Orders...</h3>
  }
}
