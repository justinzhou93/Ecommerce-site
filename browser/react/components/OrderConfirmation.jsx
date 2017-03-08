import React from 'react';

export default function (props) {
    return (
        <div className="flex-container">
          <div className="my-account-header" style={{marginTop: '3em'}}>
              <h2 className="my-account-text">Your order has been completed...</h2>
          </div>
          <br /><br /><br />
          <p>Please check your email for confirmation.</p>
          <br />
          <p>Thank you for shopping at Boardgames Galore!</p>
        </div>
    )
}
