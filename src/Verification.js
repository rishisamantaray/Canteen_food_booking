import React, { useState } from 'react';

function Verification({ verifyTicket }) {
  const [ticketInput, setTicketInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyTicket(ticketInput);
  };

  return (
    <div className="verification">
      <h2>Verify Your Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your ticket ID"
          value={ticketInput}
          onChange={(e) => setTicketInput(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default Verification;
