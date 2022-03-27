import { useData } from "../../Context/stateManage/state-context";
import "./cart.css";

const Cart = () => {
  const {
    state: { cart },
  } = useData();

  return (
    <main className='cart-wrapper'>
      <div className='cart-head flex jc-center'>
        <h1>My Cart (2)</h1>
      </div>
      <section className='pd-container-main flex flex-wrap flex-gap jc-center'>
        <div className='pd-wrapper flex jc-center flex-col flex-gap flex-wrap'>
          {cart ? <p>Hi cart</p> : <p>Your cart is Empty</p>}
        </div>
        <div className='cart-checkout'>
          <div className='card-container'>
            <div className='card-head'>
              <b>Price Details</b>
            </div>
            <div className='card-divider'></div>
            <div className='card-content'>
              <div className='item-details flex jc-between'>
                <h4>Price (2 items )</h4>
                <span className='price'>$700</span>
              </div>
              <div className='item-details flex jc-between'>
                <h4>Discount</h4>
                <span className='price'>$300</span>
              </div>
              <div className='item-details flex jc-between'>
                <h4>Delivery Charges</h4>
                <span className='price'>$0</span>
              </div>
              <div className='card-divider'></div>
              <div className='total-amount'>
                <div className='item-details flex jc-between'>
                  <h3>TOTAL AMONUT</h3>
                  <h4>$400</h4>
                </div>
              </div>
              <div className='card-divider'></div>
              <div className='cart-action flex jc-center'>
                <button className='btn'>PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
