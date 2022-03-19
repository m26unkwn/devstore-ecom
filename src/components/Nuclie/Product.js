import React from "react";
import { Tees, HeartIcon, CartIcon } from "../../assets";

const Product = (props) => {
  const { title, desc, price, prevPrice, discount, img } = props;

  return (
    <div className='pd-card-container vertical'>
      <div className='card-img-wrapper vertical-img'>
        <a href='./'>
          <img
            src={img}
            className='pd-img card-img vertical-card-img'
            alt={`${img} + img`}
          />
        </a>
      </div>
      <div className='badge pd-badge'>
        <button className='btn btn-icon'>
          <img src={HeartIcon} alt='wishlist_heart_icon' />
        </button>
      </div>
      <div className='pd-content'>
        <h1 className='pd-heading card-heading'>{title}</h1>
        <p className='pd-desc'>{desc}</p>
        <div className='pd-price'>
          <p className='crnt-price'>${price}</p>
          <p className='prev-price'>${prevPrice}</p>
          <p className='discount'>{discount}% off</p>
        </div>
        <div className='pd-card-action pd-card-btn'>
          <button className='btn icon-text'>
            <img src={CartIcon} alt='add_to_cart_icon' />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
