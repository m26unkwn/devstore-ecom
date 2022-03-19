import React from "react";

import Product from "../../Nuclie/Product";

import { useData } from "../../../Context/StateContext";

const HomeProducts = () => {
  const { state } = useData();
  const products = state.products.products;
  return (
    <section className='pd-container'>
      <div className='pd-nav'>
        <h1>Products</h1>
        <a href='./screens/product.html' className='link-btn'>
          See All
        </a>
      </div>
      <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
        {products &&
          products
            .slice(0, 4)
            .map((product) => (
              <Product
                key={product._id}
                title={product.title}
                desc={product.desc}
                price={product.price}
                prevPrice={product.prev_price}
                discount={product.discount}
                img={product.img}
              />
            ))}
      </div>
    </section>
  );
};

export default HomeProducts;
