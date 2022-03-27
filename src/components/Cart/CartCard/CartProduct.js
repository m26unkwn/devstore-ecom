import { Link } from "react-router-dom";
import { Delete, Negative, Positive } from "../../../assets";
import { useData } from "../../../Context/stateManage/state-context";
import { useAuth } from "../../../Context/auth/auth-context";
import { getDataFromServer } from "../../../services/get-data-server";

const CartProduct = (props) => {
  const { id, img, title, desc, price, prevPrice, discPrice, qty, product } =
    props;

  const {
    authState: { token },
  } = useAuth();
  const { dispatch } = useData();

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
          <p className='crnt-price'>${price}</p>
          <p className='prev-price'>{prevPrice}</p>
          <p className='discount'>{discPrice}%</p>
        </div>
        <div className='pd-quantity-action flex ai-center jc-between'>
          <span>Quantity:</span>
          <button className='btn btn-icon icon-primary-color'>
            <img src={Negative} alt='increment-product-quantity' />
          </button>
          <span className='quantity-view flex ai-center jc-center'>{qty}</span>
          <button className='btn btn-icon icon-primary-color'>
            <img src={Positive} alt='increment-product-quantity' />
          </button>
        </div>
        <div className='pd-card-action pd-card-btn'>
          <button className='btn outline-primary'>Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
