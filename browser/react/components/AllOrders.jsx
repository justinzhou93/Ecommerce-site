import React from 'react';
import SingleOrderContainer from '../containers/SingleOrderContainer'

export default function (props) {
    return (
      <div className="flex-container">
          <div className="my-account-header">
              <h2 className="my-account-text">My Orders</h2>
          </div>
          {
            props.currentUser && props.currentUser.orders.map(order => {
              return <SingleOrderContainer key={order.id} order={order} />
            })
          }
      </div>
    );
}
