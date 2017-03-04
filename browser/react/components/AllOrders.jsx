import React from 'react';
import SingleOrderContainer from '../containers/SingleOrderContainer'

export default function (props) {
    return (
      <div>
        <h3>Orders</h3>
          {
            props.orders.length && props.orders
              .map(order => {
                return (
                  <ul key={order.id}>
                    <SingleOrderContainer order={order} />
                  </ul>
              )})
          }
      </div>
    )
}
