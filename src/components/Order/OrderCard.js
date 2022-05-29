import React from "react";
import { Link } from "react-router-dom";
import "./order.css";

export const OrderCard = ({ order }) => {
  const { orderId, totalAmount, products, address } = order;

  const { name, street, city, state, pincode, phone } = address;

  return (
    <div className=' card-container order-card '>
      <div className='card-content'>
        <div className='order-info'>
          <h3 className='discount'>Order Confirmed</h3>
          <p className='pd-desc'>Order# {orderId}</p>
          <p className='order-price'>Total:₹{totalAmount}</p>
          <p className='pd-desc'>
            Deliver to: {name} , {street}, {city}, {state} , {pincode},{phone}
          </p>
        </div>
        <div className='product-info'>
          {products.length > 0 &&
            products.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className='ordered-product'>
                  <div className='img-contaniner'>
                    <img
                      src={product.img}
                      alt={product.title}
                      className='img-responsive'
                    />
                  </div>
                  <div className='text-container'>
                    <h4>{product.title}</h4>
                    <p className='pd-desc'>{product.desc}</p>
                    <p className='pd-desc'> qty {product.qty}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
