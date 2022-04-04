import { useState } from "react";
import { Link } from "react-router-dom";

import { RemoveIcon, CartIcon, Star } from "../../assets";

import { useAuth, useData } from "../../Context";

import { handlers } from "../../utils/handlers";

const WishlistCard = (props) => {
  const {
    dispatch,
    state: { cartItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const { title, desc, price, prevPrice, discount, img, product } = props;

  const isProducInCart = cartItems.some((item) => item._id === product._id);

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
          onClick={() =>
            handlers.removefromWishlist(
              product._id,
              token,
              product,
              dispatch,
              setLoading
            )
          }
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
        <p className='price rating'>
          {product.rating} <img src={Star} alt='rating_star' />
        </p>{" "}
        <div className='pd-card-action pd-card-btn'>
          <button
            disabled={loading}
            onClick={() =>
              handlers.moveToCart(
                product._id,
                token,
                product,
                dispatch,
                setLoading,
                isProducInCart
              )
            }
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
