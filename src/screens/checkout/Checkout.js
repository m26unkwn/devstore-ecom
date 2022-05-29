import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AddressModal } from "../../components/Modal/AddressModal";
import { useData } from "../../Context";
import "./checkout.css";
import { Bill } from "./Bill";

const Checkout = () => {
  const {
    state: { allAddress, cartItems },
  } = useData();

  const [modal, setModal] = useState();
  const [address, setAddress] = useState();
  const [order, setOrder] = useState();

  const openModal = () => {
    setModal(true);
  };

  const setAdressHandler = (e, address) => {
    if (e.target.checked) {
      setAddress(address);
    } else {
      setAddress(null);
    }
  };

  return (
    <main className='cart-wrapper'>
      {!order ? (
        <>
          <div className='cart-head flex jc-center'>
            <h1>Checkout</h1>
          </div>
          {cartItems.length > 0 ? (
            <section className='pd-container-main flex flex-wrap flex-gap jc-center'>
              <div className='address-wrapper'>
                {allAddress.length > 0 &&
                  allAddress.map((address) => (
                    <div key={address._id} className='checkout-address'>
                      <label
                        className='address-body gap-s '
                        htmlFor={address._id}>
                        <input
                          type='radio'
                          name='radio'
                          onChange={(e) => setAdressHandler(e, address)}
                        />
                      </label>
                      <p className='user-name'>{address.name}</p>
                      <p className='user-location'>
                        {address.street} , {address.city} , {address.state}
                      </p>
                      <p>{address.pincode}</p>
                      <p className='user-country '>{address.country}</p>
                      <p className='user-phone'>{address.phone}</p>
                    </div>
                  ))}
                <button className='btn btn-secondary' onClick={openModal}>
                  Add Address
                </button>
              </div>
              <Bill address={address} setOrderData={setOrder} />
            </section>
          ) : (
            <div className='flex jc-center flex-col sub-color'>
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                Please add Products into Cart.
              </h1>
              <Link
                to='/products'
                style={{ width: "fit-content", margin: "auto" }}
                className='btn btn-link'>
                Shop Now
              </Link>
            </div>
          )}
          {modal && <AddressModal setModal={setModal} />}
        </>
      ) : (
        <div className='cart-head flex jc-center'>
          <div className='order-summary'>
            <h2 className='order-placed'>Order Placed Successfully</h2>
            <p className='order-id'>order Id : {order.orderId}</p>
            <p className='order-text'>Thankyou for Shopping with us.</p>
            <Link to='/account/orders'>
              <button className='btn btn-primary btn-center btn-link'>
                View Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Checkout;
