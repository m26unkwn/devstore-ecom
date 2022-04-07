import { useState } from "react";
import { Link } from "react-router-dom";

import { Delete, Negative, Positive } from "../../../assets";
import { ReactComponent as StarIcon } from "../../../assets/Star.svg";

import { useData, useAuth } from "../../../Context";
import { handlers } from "../../../utils/handlers";
import Tooltip from "../../tooltip/Tooltip";

const CartProduct = (props) => {
  const { id, img, title, desc, price, prevPrice, discPrice, qty, product } =
    props;

  const {
    authState: { token },
  } = useAuth();

  const {
    dispatch,
    state: { wishlistItems },
  } = useData();

  const [loading, setLoading] = useState(false);

  let isProducInWishlist = wishlistItems.some((item) => item._id === id);

  return (
    <div className='pd-card-container'>
      <div className='card-img-wrapper'>
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
            handlers.removefromCart(id, token, product, dispatch, setLoading)
          }
          className='btn btn-icon'>
          <Tooltip info='Remove From Cart'>
            <img src={Delete} alt='remove-product-icon' />
          </Tooltip>
        </button>
      </div>
      <div className='pd-content'>
        <h1 className='pd-heading card-heading'>{title}</h1>
        <p className='pd-desc'>{desc}</p>
        <div className='pd-price'>
          <p className='crnt-price'>₹{price}</p>
          <p className='prev-price'>₹{prevPrice}</p>
          <p className='discount'>{discPrice}%</p>
        </div>
        <p className='price rating'>
          {product.rating} <StarIcon fill='orange' />
        </p>
        <div className='pd-quantity-action flex ai-center jc-between'>
          <span>Quantity:</span>
          <button
            disabled={Number(qty) === 1 || loading}
            onClick={() =>
              handlers.updateQuantity(
                id,
                token,
                dispatch,
                setLoading,
                "decrement"
              )
            }
            className={
              Number(qty) === 1
                ? "btn btn-disabled btn-icon icon-primary-color "
                : "btn btn-icon icon-primary-color "
            }>
            <img src={Negative} alt='increment-product-quantity' />
          </button>
          <span className='quantity-view flex ai-center jc-center'>{qty}</span>
          <button
            onClick={() =>
              handlers.updateQuantity(
                id,
                token,
                dispatch,
                setLoading,
                "increment"
              )
            }
            disabled={Number(qty) === 10 || loading}
            className={
              Number(qty) === 10
                ? "btn btn-disabled btn-icon icon-primary-color "
                : "btn btn-icon icon-primary-color "
            }>
            <img src={Positive} alt='increment-product-quantity' />
          </button>
        </div>
        <div className='pd-card-action pd-card-btn'>
          <button
            disabled={loading}
            onClick={() =>
              handlers.moveToWishlist(
                id,
                token,
                product,
                dispatch,
                setLoading,
                isProducInWishlist
              )
            }
            className='btn outline-primary'>
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
