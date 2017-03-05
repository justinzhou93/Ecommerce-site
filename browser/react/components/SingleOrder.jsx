import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const singleOrder = props.order;
  return (
    <div>
      <h3>Single Order {singleOrder.id}</h3>
      <ul>
            {
              singleOrder.lineitems.map((item) => {
                return (
                  <ul key={item.id}>
                    <Link to={`/products/${item.product_id}`}>Lineitem {item.price}</Link>
                  </ul>
                );
              })
            }
      </ul>
    </div>
  );
}
