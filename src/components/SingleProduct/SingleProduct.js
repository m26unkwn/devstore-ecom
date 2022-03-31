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

  // const {
  //   dispatch,
  //   state: { cartItems, wishlistItems },
  // } = useData();
  // const {
  //   authState: { token },
  // } = useAuth();

  // const [cartloading, cartSetLoading] = useState(false);
  // const [wishlistLoading, setWishListLoading] = useState(false);

  // const navigate = useNavigate();

  // const addToCartHandler = (prod) => {
  //   const header = { authorization: token };
  //   token
  //     ? getDataFromServer(
  //         "/api/user/cart",
  //         "post",
  //         dispatch,
  //         "ADD_PRODUCT_INTO_CART",
  //         "cart",
  //         cartSetLoading,
  //         {
  //           product: prod,
  //         },
  //         header
  //       )
  //     : alert("You have to login first.");
  // };

  // const isProducInCart = cartItems.some(
  //   (item) => item._id === singleProduct.product._id
  // );
  // const isProducInWishlist = wishlistItems.some(
  //   (item) => item._id === singleProduct.product._id
  // );

  // const moveToWishlistHandler = (product) => {
  //   const header = { authorization: token };
  //   if (isProducInWishlist) {
  //     alert("Item already inside of Wishlist");
  //   } else if (token) {
  //     getDataFromServer(
  //       `/api/user/wishlist`,
  //       "POST",
  //       dispatch,
  //       "ADD_PRODUCT_INTO_WISHLIST",
  //       "wishlist",
  //       setWishListLoading,
  //       { product: product },
  //       header
  //     );
  //   } else {
  //     alert("You have to login first.");
  //   }
  // };

  // const removefromWishlistHandler = (id) => {
  //   const header = { authorization: token };
  //   token
  //     ? getDataFromServer(
  //         `/api/user/wishlist/${id}`,
  //         "DELETE",
  //         dispatch,
  //         "ADD_PRODUCT_INTO_WISHLIST",
  //         "wishlist",
  //         setWishListLoading,
  //         { product: singleProduct.product },
  //         header
  //       )
  //     : alert("You have to login first.");
  // };

  return (
    <div className='card-container equal-grid  single-product-wrapper flex flex-row'>
      <div>
        <img
          className='img-responsive'
          src={SingleProduct && SingleProduct.product.img}
          alt='product-img '
        />
      </div>
      <div class='pd-content'>
        <h2 class='pd-heading'>
          {SingleProduct && SingleProduct.product.title}
        </h2>
        <p> {SingleProduct && SingleProduct.product.brand}</p>
        <p> {SingleProduct && SingleProduct.product.desc}</p>
        <div class='pd-price'>
          <h3 class='crnt-price'>$200</h3>
          <h3 class='prev-price'>$350</h3>
          <h3 class='discount'>30% off</h3>
        </div>

        <div class='pd-card-action'>
          <button className='btn icon-text'>
            <img src={CartIcon} alt='add_to_cart_icon' />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
