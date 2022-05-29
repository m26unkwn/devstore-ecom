import React from "react";
import "./order.css";

export const OrderCard = ({ order }) => {
  const { orderId, totalAmount, products, address } = order;

  const { name, street, city, state, pincode, phone } = address;

  return (
    <div className='order-card'>
      <div className='order-info'>
        <h3 className='discount'>Order Confirmed</h3>
        <p className='pd-desc'>Order# {orderId}</p>
        <p className='order-price'>Total:₹{totalAmount}</p>
        <p className='pd-desc'>
          Deliver to: {name} , {street}, {city}, {state} , {pincode},{phone}
        </p>
      </div>
      <div className='product-info'></div>
    </div>
  );
};
