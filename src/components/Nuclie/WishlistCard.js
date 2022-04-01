import { RemoveIcon, CartIcon } from "../../assets";
import { useAuth } from "../../Context/auth/auth-context";
import { useData } from "../../Context/stateManage/state-context";
import { getDataFromServer } from "../../services/get-data-server";
import { useState } from "react";
import { Link } from "react-router-dom";
const WishlistCard = (props) => {
  const {
    dispatch,
    state: { cartItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();
  const { title, desc, price, prevPrice, discount, img, product } = props;

  const [loading, setLoading] = useState(false);

  const removefromWishlistHandler = (id) => {
    const header = { authorization: token };
    getDataFromServer(
      `/api/user/wishlist/${id}`,
      "DELETE",
      dispatch,
      "ADD_PRODUCT_INTO_WISHLIST",
      "wishlist",
      setLoading,
      { product: product },
      header
    );
  };

  const isProducInCart = cartItems.some((item) => item._id === product._id);

  const addToCartHandler = (prod, id) => {
    const header = { authorization: token };
    if (isProducInCart) {
      alert("Item is already in the cart");
    } else {
      getDataFromServer(
        "/api/user/cart",
        "post",
        dispatch,
        "ADD_PRODUCT_INTO_CART",
        "cart",
        setLoading,
        {
          product: prod,
        },
        header
      );
      removefromWishlistHandler(id);
    }
  };

  return (
    <div className='pd-card-container vertical'>
      <div className='card-img-wrapper vertical-img'>
        <Link to={`/products/${product._id}`}>
          <img
            src={img}
            className='pd-img card-img vertical-card-img'
            alt={`${title} + img`}
          />
        </Link>
      </div>
      <div className='badge pd-badge'>
        <button
          disabled={loading}
          onClick={() => removefromWishlistHandler(product._id)}
          className='btn btn-icon'>
          <img src={RemoveIcon} alt='wishlist_heart_icon' />
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
          <button
            disabled={loading}
            onClick={() => addToCartHandler(product, product._id)}
            className='btn icon-text'>
            <img src={CartIcon} alt='add_to_cart_icon' />
            Move To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
