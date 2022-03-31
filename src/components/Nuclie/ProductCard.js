import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartIcon } from "../../assets";
import { ReactComponent as HeartIcon } from "../../assets/svg/Heart.svg";
import { useAuth } from "../../Context/auth/auth-context";
import { useData } from "../../Context/stateManage/state-context";
import { getDataFromServer } from "../../services/get-data-server";

const ProductCard = (props) => {
  const {
    dispatch,
    state: { cartItems, wishlistItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const { title, desc, price, prevPrice, discount, img, inStock, product } =
    props;

  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    const header = { authorization: token };
    token
      ? getDataFromServer(
          "/api/user/cart",
          "post",
          dispatch,
          "ADD_PRODUCT_INTO_CART",
          "cart",
          setLoading,
          {
            product: product,
          },
          header
        )
      : alert("You have to login first.");
  };

  const isProducInCart = cartItems.some((item) => item._id === product._id);
  const isProducInWishlist = wishlistItems.some(
    (item) => item._id === product._id
  );

  const moveToWishlistHandler = (product) => {
    const header = { authorization: token };
    if (isProducInWishlist) {
      alert("Item already inside of Wishlist");
    } else if (token) {
      getDataFromServer(
        `/api/user/wishlist`,
        "POST",
        dispatch,
        "ADD_PRODUCT_INTO_WISHLIST",
        "wishlist",
        setLoading,
        { product: product },
        header
      );
    } else {
      alert("You have to login first.");
    }
  };

  const removefromWishlistHandler = (id) => {
    const header = { authorization: token };
    token
      ? getDataFromServer(
          `/api/user/wishlist/${id}`,
          "DELETE",
          dispatch,
          "ADD_PRODUCT_INTO_WISHLIST",
          "wishlist",
          setLoading,
          { product: product },
          header
        )
      : alert("You have to login first.");
  };

  return (
    <div className='pd-card-container vertical'>
      <div className={inStock === false ? "card-overlay" : ""}>
        <div className='card-img-wrapper vertical-img'>
          <Link to={`/product/${product._id}`}>
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
                ? removefromWishlistHandler(product._id)
                : moveToWishlistHandler(product)
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
          <div className='pd-card-action pd-card-btn'>
            <button
              disabled={loading}
              onClick={() =>
                isProducInCart ? navigate("/cart") : addToCartHandler(product)
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
