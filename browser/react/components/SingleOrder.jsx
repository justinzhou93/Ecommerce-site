import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  return (
    <div>
      <h3>Single Order {props.order.id}</h3>
      <ul>
            {
              props.lineitems.length && props.lineitems.map((item) => {
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
