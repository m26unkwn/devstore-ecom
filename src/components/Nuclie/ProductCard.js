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
  const [wishlistLoading, setWishListLoading] = useState(false);

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
          setLoading,
          {
            product: prod,
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
        setWishListLoading,
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
          setWishListLoading,
          { product: product },
          header
        )
      : alert("You have to login first.");
  };

  return (
    <div className='pd-card-container vertical'>
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
          disabled={wishlistLoading}
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
          {isProducInCart ? (
            <button onClick={() => navigate("/cart")} className='btn icon-text'>
              <img src={CartIcon} alt='add_to_cart_icon' />
              Go To Cart
            </button>
          ) : (
            <button
              disabled={loading}
              onClick={() => addToCartHandler(product)}
              className={
                loading ? "btn icon-text btn-disabled" : "btn icon-text"
              }>
              <img src={CartIcon} alt='add_to_cart_icon' />
              Add to cart
            </button>
          )}
        </div>
      </div>
      {!wishlistItems}
    </div>
  );
};

export default ProductCard;
