import React from "react";
import { useAuth, useData } from "../../Context";
import { useLocation } from "react-router-dom";
import { handlers } from "../../utils/handlers";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export const Bill = ({ address, setOrderData }) => {
  const {
    state: { cartItems },
    dispatch,
  } = useData();

  const {
    authState: { token },
  } = useAuth();
  const {
    state: { cartValue },
  } = useLocation();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
    );
    if (!res) {
      toast.error("You are offline!, please check your internet");
      return;
    }

    // checkoutDispatch({ type: "clearSelections" });

    const options = {
      key: "rzp_test_MHI0UXUT81c4xu",
      amount: cartValue.totalprice * 100,
      currency: "INR",
      name: "DevStore",
      description: "Shopping With DevStore",

      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderId = uuid();

        let orderData = {
          paymentId: paymentId,
          orderId: orderId,
          totalAmount: cartValue?.totalprice,
          products: [...cartItems],
          address: address,
        };
        handlers.emptyCart(token, dispatch);
        handlers.addOrder(token, orderData, dispatch);
        setOrderData({
          orderId: orderId,
        });
      },
      prefill: {
        name: "DevStore",
        email: "buy@devstore.com",
        contact: "9999999999",
      },
      notes: {
        address: "Devstore A Mall developers",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className='cart-total-wrapper flex-column gap-s'>
      <div className='card-container'>
        <div className='card-head'>
          <b>Purchased Details</b>
        </div>
        <div className='card-divider'></div>
        <div className='card-content'>
          <div className='item-details flex jc-between'>
            <h4 className='sub-desc'>Items</h4>
            <h4 className='sub-desc'>Price</h4>
          </div>
          {cartItems.map((item) => (
            <div key={item._id} className='item-details flex jc-between'>
              <p className='price'>
                {item.title} ({item.qty + "x" + item.prev_price})
              </p>
              <span className='price'>₹ {item.prev_price * item.qty}</span>
            </div>
          ))}
        </div>
        <div className='card-divider'></div>
        <div className='card-head'>
          <b>Price Details</b>
        </div>
        <div className='card-divider'></div>
        <div className='card-content'>
          <div className='item-details flex jc-between'>
            <h4>Price ({cartItems.length} items )</h4>
            <span className='price'>₹ {cartValue.price}</span>
          </div>
          <div className='item-details flex jc-between'>
            <h4>Discount</h4>
            <span className='price'>₹ {cartValue.discount}</span>
          </div>
          <div className='item-details flex jc-between'>
            <h4>Delivery Charges</h4>
            <span className='price'>₹0</span>
          </div>
          <div className='card-divider'></div>
          <div className='total-amount'>
            <div className='item-details flex jc-between'>
              <h3>TOTAL AMOUNT</h3>
              <h4>₹{cartValue.totalprice}</h4>
            </div>
          </div>
          <div className='card-divider'></div>
          {address ? (
            <div className='card-action flex jc-center'>
              <button className='btn' onClick={makePayment}>
                MAKE PAYMENT
              </button>
            </div>
          ) : (
            <p className='price' style={{ textAlign: "center" }}>
              Please select Address
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
