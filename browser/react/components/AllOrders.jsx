import React from 'react';
// import {SingleOrder} from '../containers/SingleOrder'

export default function (props) {
    return (
      <div className="ordersGroup">
        <h3>All Orders</h3>
        {/*<ul>
          {
            this.props.orders && this.props.orders
              .filter(this.filterOrder)
              .map(order => <SingleOrder SingleOrder={order} key={order.id} />)
          }
        </ul>*/}
      </div>
    )
}
