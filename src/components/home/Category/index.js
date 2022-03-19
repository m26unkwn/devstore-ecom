import React from "react";

import { Sticker, Tees, Hat, Bag } from "../../../assets";

const Category = () => {
  return (
    <section className='pd-container'>
      <h1>Categories</h1>
      <div className='categories-wrapper flex jc-center flex-wrap'>
        <div className='categories-item'>
          <a href='./'>
            <img
              className='img-resposive'
              src={Sticker}
              alt='clothing-section'
            />
          </a>
          <div className='item-btn'>
            <a href='./'>Shop Stickers</a>
          </div>
        </div>
        <div className='categories-item'>
          <a href='./'>
            <img className='img-resposive' src={Tees} alt='clothing-section' />
          </a>
          <div className='item-btn'>
            <a href='./'>Shop T-Shirts</a>
          </div>
        </div>
        <div className='categories-item'>
          <a href='./'>
            <img className='img-resposive' src={Hat} alt='clothing-section' />
          </a>
          <div className='item-btn'>
            <a href='./'>Shop Hats</a>
          </div>
        </div>
        <div className='categories-item'>
          <a href='./'>
            <img className='img-resposive' src={Bag} alt='clothing-section' />
          </a>
          <div className='item-btn'>
            <a href='./'>Shop Bags</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
