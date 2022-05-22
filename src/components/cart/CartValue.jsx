import { useData } from "../../Context";
import { cartValueCalc } from "./utils/cart-value";

const CartValue = () => {
  const {
    state: { cartItems },
  } = useData();

  const cartValueData = cartValueCalc(cartItems);

  return (
    <div className='cart-checkout'>
      <div className='card-container'>
        <div className='card-head'>
          <b>Price Details</b>
        </div>
        <div className='card-divider'></div>
        <div className='card-content'>
          <div className='item-details flex jc-between'>
            <h4>Price ({cartItems.length} items )</h4>
            <span className='price'>₹ {cartValueData.price}</span>
          </div>
          <div className='item-details flex jc-between'>
            <h4>Discount</h4>
            <span className='price'>₹ {cartValueData.discount}</span>
          </div>
          <div className='item-details flex jc-between'>
            <h4>Delivery Charges</h4>
            <span className='price'>₹0</span>
          </div>
          <div className='card-divider'></div>
          <div className='total-amount'>
            <div className='item-details flex jc-between'>
              <h3>TOTAL AMONUT</h3>
              <h4>₹{cartValueData.totalprice}</h4>
            </div>
          </div>
          <div className='card-divider'></div>
          <div className='cart-action flex jc-center'>
            <button className='btn'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartValue;
