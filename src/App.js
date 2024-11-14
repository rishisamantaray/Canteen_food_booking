import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import Ticket from './Ticket';
import Order from './Order';
import Verification from './Verification';
import Delivery from './Delivery';

function App() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(''); // User's mobile number

  // Function to generate ticket after booking food
  const handleBooking = (order) => {
    const generatedTicket = `TICKET-${Math.floor(Math.random() * 10000)}`;
    setOrderDetails(order);
    setTicket(generatedTicket);
    setIsVerified(false); // reset verification status

    // Send the ticket info and mobile number to the backend to send SMS
    axios.post('https://canteen-food-booking-backend.onrender.com:5000/book-ticket', {
      mobileNumber: mobileNumber,  // Ensure this value is set in a form
      ticketId: generatedTicket,
      foodItem: order.foodItem,
      quantity: order.quantity
    })
    .then((response) => {
      console.log(response.data.message);
      alert('Ticket booked successfully, and an SMS has been sent!');
    })
    .catch((error) => {
      console.error('Error booking ticket:', error);
      alert('There was an error booking the ticket or sending the SMS.');
    });
  };

  // Function to verify ticket
  const verifyTicket = (ticketInput) => {
    if (ticketInput === ticket) {
      setIsVerified(true);
    } else {
      alert('Invalid Ticket!');
    }
  };

  return (
    <div className="App">
      <h1>Canteen Food Booking System</h1>
      
      <Order handleBooking={handleBooking} />
      
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter your mobile number"
      />
      
      {ticket && !isVerified && <Verification verifyTicket={verifyTicket} />}
      
      {isVerified && <Delivery order={orderDetails} />}
      
      {ticket && isVerified && <Ticket ticket={ticket} order={orderDetails} />}
    </div>
  );
}

export default App;
