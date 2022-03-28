import { useNavigate } from "react-router-dom";
import { HeartIcon, CartIcon } from "../../assets";
import { useAuth } from "../../Context/auth/auth-context";
import { useData } from "../../Context/stateManage/state-context";
import { getDataFromServer } from "../../services/get-data-server";

const ProductCard = (props) => {
  const {
    dispatch,
    state: { cartItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();
  const { title, desc, price, prevPrice, discount, img, product } = props;

  const navigate = useNavigate();

  const addToCartHandler = (prod) => {
    const header = { authorization: token };
    token
      ? getDataFromServer(
          "/api/user/cart",
          "post",
          dispatch,
          "ADD_PRODUCT_INTO_CART",
          "cart",
          {
            product: prod,
          },
          header
        )
      : alert("You have to login first.");
  };

  const isProducInCart = cartItems.some((item) => item._id === product._id);

  return (
    <div className='pd-card-container vertical'>
      <div className='card-img-wrapper vertical-img'>
        <a href='./'>
          <img
            src={img}
            className='pd-img card-img vertical-card-img'
            alt={`${title} + img`}
          />
        </a>
      </div>
      <div className='badge pd-badge'>
        <button className='btn btn-icon'>
          <img src={HeartIcon} alt='wishlist_heart_icon' />
        </button>
      </div>
      <div className='pd-content'>
        <h1 className='pd-heading card-heading'>{title}</h1>
        <p className='pd-desc'>{desc}</p>
        <div className='pd-price'>
          <p className='crnt-price'>₹{price}</p>
          <p className='prev-price'>₹{prevPrice}</p>
          <p className='discount'>{discount}% off</p>
        </div>
        <div className='pd-card-action pd-card-btn'>
          {isProducInCart ? (
            <button onClick={() => navigate("/cart")} className='btn icon-text'>
              <img src={CartIcon} alt='add_to_cart_icon' />
              Go To Cart
            </button>
          ) : (
            <button
              onClick={() => addToCartHandler(product)}
              className='btn icon-text'>
              <img src={CartIcon} alt='add_to_cart_icon' />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
