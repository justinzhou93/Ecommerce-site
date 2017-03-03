import React from 'react';
import {SingleOrder} from '../containers/SingleOrder'

export default SingleOrder = (props) => {
  return (
    <div>
      <ul>
          {
            props.orders && props.orders.lineItems
            .map(lineItem => <li key={lineItem.id}>{lineItem}</li>)
          }
      </ul>
    </div>
  )
}
