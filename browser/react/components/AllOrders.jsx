import React from 'react';
import {SingleOrderContainer} from '../containers/SingleOrderContainer'

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
              .map(order => <SingleOrderContainer SingleOrder={order} key={order.id} />)
          }
        </ul>
      </div>
    )
  }
}
