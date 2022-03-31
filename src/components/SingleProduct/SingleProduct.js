import { useParams, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/use-axios";
import { CartIcon } from "../../assets";
import { ReactComponent as HeartIcon } from "../../assets/svg/Heart.svg";
import { useData } from "../../Context/stateManage/state-context";
import { useAuth } from "../../Context/auth/auth-context";
import { useState } from "react";

import { getDataFromServer } from "../../services";

import "./singlePd.css";

const SingleProduct = () => {
  const { productId } = useParams();

  const [SingleProduct, loading] = useAxios(`/api/products/${productId}`);

  const product = SingleProduct?.product;
  const {
    dispatch,
    state: { cartItems, wishlistItems },
  } = useData();
  const {
    authState: { token },
  } = useAuth();

  const [actionDisable, setActionDisable] = useState(false);

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
          setActionDisable,
          {
            product: prod,
          },
          header
        )
      : alert("You have to login first.");
  };

  const isProducInCart = cartItems.some((item) => item._id === productId);
  const isProducInWishlist = wishlistItems.some(
    (item) => item._id === productId
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
        setActionDisable,
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
          setActionDisable,
          { product: SingleProduct.product },
          header
        )
      : alert("You have to login first.");
  };
  return SingleProduct?.product ? (
    <>
      <div className='card-container equal-grid  single-product-wrapper flex flex-row'>
        <div>
          <img
            className='img-responsive'
            src={product.img}
            alt='product-img '
          />
        </div>
        <div className='pd-content'>
          <h2 className='pd-heading'>{product.title}</h2>
          <p> {product.brand}</p>
          <p> {product.desc}</p>
          <div className='pd-price'>
            <h3 className='crnt-price'>$ {product.price}</h3>
            <h3 className='prev-price'>$ {product.prev_prece}</h3>
            <h3 className='discount'>{product.discount} off</h3>
          </div>
          <div className='discount'>inclusive of all taxes</div>
          <div className='card-divider'></div>
          <div className='pd-card-action pd-card-btn flex flex-col'>
            <button
              disabled={actionDisable}
              onClick={() =>
                isProducInCart
                  ? navigate("/cart")
                  : addToCartHandler(SingleProduct.product)
              }
              className={
                loading ? "btn icon-text btn-disabled" : "btn icon-text"
              }>
              <img src={CartIcon} alt='add_to_cart_icon' />
              {isProducInCart ? "Go To Cart" : "Add To Cart"}
            </button>

            <button
              disabled={actionDisable}
              onClick={() =>
                isProducInWishlist
                  ? removefromWishlistHandler(product._id)
                  : moveToWishlistHandler(product)
              }
              className='btn icon-text outline-error'>
              <HeartIcon
                fill={isProducInWishlist ? "var(--danger-color)" : "none"}
              />
              Add To Wishlist
            </button>
          </div>
          <ul>
            <h5>Features</h5>
            {SingleProduct
              ? product.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))
              : "Loading"}
          </ul>
        </div>
      </div>
    </>
  ) : loading ? (
    <h1 className='flex jc-center'>Loading</h1>
  ) : (
    <h1 className='flex jc-center'>No product Available</h1>
  );
};
export default SingleProduct;
