import React from "react";

export const CategoryCard = ({ link, img, categoryName }) => {
  return (
    <div className='categories-item'>
      <a href={link}>
        <img className='img-resposive' src={img} alt='clothing-section' />
      </a>
      <div className='item-btn'>
        <a href='./'>Shop {categoryName}</a>
      </div>
    </div>
  );
};
