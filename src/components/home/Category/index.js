import React from "react";
import useAxios from "../../../hooks/use-axios";

import { CategoryCard } from "./Category";

const Category = () => {
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
