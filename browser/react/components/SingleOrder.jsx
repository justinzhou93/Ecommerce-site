import React from 'react';
import { Link } from 'react-router';

const renderLineItems = function (order) {
  return (
    <div>
      {
        order.lineitems.map((item) => {
          return (
            <div key={item.id} className="managed-items">
              {item.id}<br />
              Price {item.price}<br />
            </div>
          );
        })
      }
    </div>
  )
}

export default function (props) {
  return (
    <div className="user-profile-items">
      <div className="order-items">
        <div className="profile-header">
            <h3 className="profile-item-header">Order #{props.order.id}</h3>
            <a onClick={props.handleViewItemsClick} className="header-link-text">View ordered items</a>
        </div>
          {props.viewItemsOpen ? renderLineItems(props.order) : null}
      </div>

    </div>
  )
}
