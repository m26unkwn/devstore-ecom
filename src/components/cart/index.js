import { useData } from "../../Context/stateManage/state-context";
import "./cart.css";
import CartProduct from "./CartCard/CartProduct";
import CartValue from "./CartValue";

const Cart = () => {
  const {
    state: { cartItems },
  } = useData();

  return (
    <main className='cart-wrapper'>
      <div className='cart-head flex jc-center'>
        <h1>My Cart {cartItems.length}</h1>
      </div>
      <section className='pd-container-main flex flex-wrap flex-gap jc-center'>
        <div className='pd-wrapper flex jc-center flex-col flex-gap flex-wrap'>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartProduct
                key={item._id}
                id={item._id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                prevPrice={item.prev_price}
                discPrice={item.discount}
                qty={item.qty}
                product={item}
              />
            ))
          ) : (
            <h1>You cart is empty</h1>
          )}
        </div>
        {cartItems.length > 0 && <CartValue />}
      </section>
    </main>
  );
};

export default Cart;
