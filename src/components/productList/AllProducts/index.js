import ProductCard from "../../Nuclie/ProductCard";

import { useData } from "../../../Context/state-context";
import productFilter from "../utils/product-filter";

export const AllProducts = () => {
  const { state } = useData();
  const filterProduct = productFilter(state.products, state.selectedFilters);
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
            />
          ))}
      </div>
    </section>
  );
};

export default AllProducts;
