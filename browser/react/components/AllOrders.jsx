import React from 'react';
import {SingleOrder} from '../containers/SingleOrder'

export default class Orders extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="ordersGroup">
        <ul>
          {
            this.props.orders && this.props.orders
              .map(order => <SingleOrder SingleOrder={order} key={order.id} />)
          }
        </ul>
      </div>
    )
  }
}
