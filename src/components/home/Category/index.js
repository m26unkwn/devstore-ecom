import React from "react";
import { useState, useEffect } from "react/cjs/react.production.min";

import useAxios from "../../../hooks/useAxios";

import { CategoryCard } from "./Category";

const Category = () => {
  //const [categoryData, setcategoryData] = useState([]);
  const [categoryDatas] = useAxios("/api/categories", "get");

  return (
    <section className='pd-container'>
      <h1>Categories</h1>
      <div className='categories-wrapper flex jc-center flex-wrap'>
        {categoryDatas &&
          categoryDatas.categories.map((item) => (
            <CategoryCard
              key={item._id}
              link={item.link}
              img={item.img}
              categoryName={item.categoryName}
            />
          ))}
      </div>
    </section>
  );
};

export default Category;
