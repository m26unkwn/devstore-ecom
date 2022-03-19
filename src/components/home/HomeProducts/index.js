import React from "react";

import Product from "../../Nuclie/Product";

const productData = [
  {
    title: "Don't Stop ",
    desc: "Motivation Stikers",
    price: "4",
    prev_price: "8",
    discount: "50",
    category: "stickers",
  },
  {
    title: "Cool Hat",
    desc: "black Devloper Hat",
    price: "40",
    prev_price: "80",
    discount: "50",
    category: "hat",
  },
  {
    title: "Printed Tees ",
    desc: "Motivation Stikers",
    price: "80",
    prev_price: "160",
    discount: "50",
    category: "Tees",
  },
  {
    title: "Github  Sticker ",
    desc: "Cat Github Sticker",
    price: "6",
    prev_price: "12",
    discount: "50",
    category: "sticker",
  },
];

const HomeProducts = () => {
  return (
    <section className='pd-container'>
      <div className='pd-nav'>
        <h1>Products</h1>
        <a href='./screens/product.html' className='link-btn'>
          See All
        </a>
      </div>
      <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
        {productData &&
          productData.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              desc={product.desc}
              price={product.price}
              prevPrice={product.prev_price}
              discount={product.discount}
            />
          ))}
      </div>
    </section>
  );
};

export default HomeProducts;
