import React from 'react';

export default function (props) {
    return (
        <div>
            <h2>User Profile Page</h2>
            {<ul>{props.currentUser.firstName} {props.currentUser.lastName}</ul>}
            <h4>User Addresses</h4>
            {<ul>{props.addresses.length && props.addresses.map((address) => <li key={address.id}>{address.address1}</li>)} </ul>}
            <h4>User Credit Cards</h4>
            {<ul>{props.creditCards.length && props.creditCards.map((card) => <li key={card.id}>{card.number}</li>)} </ul>}
            <h4>User Orders</h4>
            {<ul>{props.orders.length && props.orders.map((order) => <li key={order.id}>Order #{order.id}</li>)} </ul>}
            <h4>User Reviews</h4>
            {<ul>{props.reviews.length && props.reviews.map((review) => <li key={review.id}>Review ${review.id}</li>)} </ul>}
        </div>
    );
}
