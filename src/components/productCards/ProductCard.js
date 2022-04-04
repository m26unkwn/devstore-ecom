import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartIcon, Star } from "../../assets";
import { ReactComponent as HeartIcon } from "../../assets/svg/Heart.svg";
import { useAuth, useData } from "../../Context";
import { handlers } from "../../utils/handlers";

const ProductCard = (props) => {
  const {
    dispatch,
    state: { cartItems, wishlistItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    title,
    desc,
    price,
    prevPrice,
    discount,
    img,
    inStock,
    rating,
    product,
  } = props;

  const navigate = useNavigate();

  const isProducInCart = cartItems.some((item) => item._id === product._id);

  const isProducInWishlist = wishlistItems.some(
    (item) => item._id === product._id
  );

  return (
    <div className='pd-card-container vertical'>
      <div className={inStock === false ? "card-overlay" : ""}>
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
              isProducInWishlist
                ? handlers.removefromWishlist(
                    product._id,
                    token,
                    product,
                    dispatch,
                    setLoading,
                    isProducInWishlist
                  )
                : handlers.addToWishlist(
                    token,
                    product,
                    dispatch,
                    setLoading,
                    isProducInWishlist
                  )
            }
            className='btn btn-icon'>
            <HeartIcon
              fill={isProducInWishlist ? "var(--danger-color)" : "none"}
            />
          </button>
        </div>
        <div className='pd-content'>
          <h1
            className='pd-heading card-heading'
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
            {title}
          </h1>
          <p className='pd-desc'>{desc}</p>
          <div className='pd-price'>
            <p className='crnt-price'>₹{price}</p>
            <p className='prev-price'>₹{prevPrice}</p>
            <p className='discount'>{discount}% off</p>
          </div>
          <p className='price rating'>
            {rating} <img src={Star} alt='rating_star' />
          </p>
          <div className='pd-card-action pd-card-btn'>
            <button
              disabled={loading}
              onClick={() =>
                isProducInCart
                  ? navigate("/cart")
                  : handlers.addToCart(token, product, dispatch, setLoading)
              }
              className='btn icon-text'>
              <img src={CartIcon} alt='add_to_cart_icon' />
              {isProducInCart ? "Go To Cart" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
      {inStock === false && <div class='overlay-text'>SOLD OUT</div>}
    </div>
  );
};

export default ProductCard;
