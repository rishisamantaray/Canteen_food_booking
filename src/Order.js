import React, { useState } from 'react';

function Order({ handleBooking }) {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sandwich'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { foodItem, quantity };
    handleBooking(order);
  };

  return (
    <div className="order-form">
      <h2>Book Your Food</h2>
      <form onSubmit={handleSubmit}>
        <select value={foodItem} onChange={(e) => setFoodItem(e.target.value)}>
          <option value="">Select a food item</option>
          {foodItems.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Order;
