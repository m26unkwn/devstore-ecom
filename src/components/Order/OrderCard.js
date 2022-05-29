import React from "react";
import "./order.css";

export const OrderCard = () => {
  return (
    <div className='order-card'>
      <div className='order-info'>
        <h3 className='discount'>Order Confirmed</h3>
        <p className='pd-desc'>Sat May 28 2022</p>
        <p className='pd-desc'>Order# 62922964635b5800154dea86</p>
        <p className='order-price'>Total:₹1999</p>
        <p className='pd-desc'>
          Deliver to: John Doe, #1/4 , 100ft Ring Road, Jp Nagar - 4 Phase,
          Dollars Colony, Bangalore, 560078
        </p>
      </div>
    </div>
  );
};
