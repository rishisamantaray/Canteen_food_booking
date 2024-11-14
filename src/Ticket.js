import React from 'react';

function Ticket({ ticket, order }) {
  return (
    <div className="ticket">
      <h2>Your Ticket</h2>
      <p><strong>Ticket ID:</strong> {ticket}</p>
      <p><strong>Food Item:</strong> {order.foodItem}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
    </div>
  );
}

export default Ticket;
