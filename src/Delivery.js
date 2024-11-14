import React from 'react';

function Delivery({ order }) {
  return (
    <div className="delivery">
      <h2>Your Food Order</h2>
      <p><strong>Food Item:</strong> {order.foodItem}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p>Your order is on the way! Expect delivery in 30 minutes.</p>
    </div>
  );
}

export default Delivery;
