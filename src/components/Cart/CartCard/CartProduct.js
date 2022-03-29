import { Link } from "react-router-dom";
import { Delete, Negative, Positive } from "../../../assets";
import { useData } from "../../../Context/stateManage/state-context";
import { useAuth } from "../../../Context/auth/auth-context";
import { postUpdatedQuantity, getDataFromServer } from "../../../services/";

const CartProduct = (props) => {
  const { id, img, title, desc, price, prevPrice, discPrice, qty, product } =
    props;

  const {
    authState: { token },
  } = useAuth();
  const {
    dispatch,
    state: { wishlistItems, cartItems },
  } = useData();

  const removefromCartHandler = (id) => {
    const header = { authorization: token };
    getDataFromServer(
      `/api/user/cart/${id}`,
      "DELETE",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      "cart",
      { product: product },
      header
    );
  };

  let isProducInWishlist = wishlistItems.some((item) => item._id === id);

  const quantityUpdateHandler = (id, type) => {
    const header = { authorization: token };

    const updatedQuantity = cartItems.filter((item) => {
      if (item._id === id) {
        if (type === "increment") {
          item.qty = item.qty + 1;
        } else {
          item.qty = item.qty - 1;
        }
      }
      return item;
    });
    dispatch({ type: "ADD_PRODUCT_INTO_CART", payload: updatedQuantity });

    postUpdatedQuantity(
      `/api/user/cart/${id}`,
      "post",
      dispatch,
      "ADD_PRODUCT_INTO_CART",
      product,

      {
        action: {
          type: type,
        },
      },
      header
    );
  };

  const moveToWishlistHandler = (product) => {
    const header = { authorization: token };
    isProducInWishlist
      ? alert("Item already inside of Wishlist")
      : getDataFromServer(
          `/api/user/wishlist`,
          "POST",
          dispatch,
          "ADD_PRODUCT_INTO_WISHLIST",
          "wishlist",
          { product: product },
          header
        );
    removefromCartHandler(id);
  };

  return (
    <div className='pd-card-container'>
      <div className='card-img-wrapper'>
        <Link to='/'>
          <img
            src={img}
            className='pd-img card-img vertical-card-img'
            alt='img'
          />
        </Link>
      </div>
      <div className='badge pd-badge'>
        <button
          onClick={() => removefromCartHandler(id)}
          className='btn btn-icon'>
          <img src={Delete} alt='remove-product-icon' />
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
        <div className='pd-quantity-action flex ai-center jc-between'>
          <span>Quantity:</span>
          <button
            disabled={Number(qty) === 1}
            onClick={() => quantityUpdateHandler(id, "decrement")}
            className={
              Number(qty) === 1
                ? "btn btn-disabled btn-icon icon-primary-color "
                : "btn btn-icon icon-primary-color "
            }>
            <img src={Negative} alt='increment-product-quantity' />
          </button>
          <span className='quantity-view flex ai-center jc-center'>{qty}</span>
          <button
            onClick={() => quantityUpdateHandler(id, "increment")}
            disabled={Number(qty) === 10}
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
            onClick={() => moveToWishlistHandler(product)}
            className='btn outline-primary'>
            Move to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
