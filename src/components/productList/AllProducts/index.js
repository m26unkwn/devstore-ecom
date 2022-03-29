import ProductCard from "../../Nuclie/ProductCard";

import { useData } from "../../../Context/stateManage/state-context";
import productFilter from "../utils/product-filter";

export const AllProducts = () => {
  const { state } = useData();

  const filterProduct = productFilter(state.products, state.selectedFilters);
  console.log("filterData", filterProduct);

  return (
    <section className='pd-container-main'>
      <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
        {filterProduct &&
          filterProduct.map((product) => (
            <ProductCard
              key={product._id}
              title={product.title}
              desc={product.desc}
              price={product.price}
              prevPrice={product.prev_price}
              discount={product.discount}
              img={product.img}
              product={product}
            />
          ))}
      </div>
    </section>
  );
};

export default AllProducts;
