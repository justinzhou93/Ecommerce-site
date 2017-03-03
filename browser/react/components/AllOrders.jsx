import React from 'react';
import {SingleOrder} from '../containers/SingleOrder'

export default class Orders extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="ordersGroup">
        <ul>
          {
            this.props.orders && this.props.orders
              .filter(this.filterOrder)
              .map(order => <SingleOrder SingleOrder={order} key={order.id} />)
          }
        </ul>
      </div>
    )
  }

  filterOrder(order){
    if (order.user_id === this.props.user.id){
      return order;
    }
  }
}
