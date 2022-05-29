import React from "react";
import { Link } from "react-router-dom";
import { OrderCard } from "../../components";
import { useData } from "../../Context";

const Orders = () => {
  const {
    state: { orders },
  } = useData();

  console.log(orders);
  return (
    <div className=' account-wrapper'>
      <Link to='/account' className='btn account-btn outline-secondary'>
        <h3>
          {"<  "}
          Account
        </h3>
      </Link>
      <div className=' card-container account-head flex flex-col ai-center jc-center'>
        <h1 className='flex jc-center'>My Orders</h1>
        <div className='card-divider'></div>
        <div className='addresss-wrapper'>
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default Orders;
