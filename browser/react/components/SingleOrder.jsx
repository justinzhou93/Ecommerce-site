import React from 'react';

export default function (props) {
  return (
    <div>
      <ul>
          {
            props.orders && props.orders.lineItems
            .map(lineItem => <li key={lineItem.id}>{lineItem}</li>)
          }
      </ul>
    </div>
  );
}
