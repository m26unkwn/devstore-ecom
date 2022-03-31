import ProductCard from "../../Nuclie/ProductCard";

import { useData } from "../../../Context/stateManage/state-context";
import productFilter from "../utils/product-filter";

export const AllProducts = () => {
  const { state } = useData();

  const filterProduct = productFilter(state.products, state.selectedFilters);
  console.log(filterProduct);

  return (
    <section className='pd-container-main'>
      <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
        {filterProduct.length > 0 ? (
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
          ))
        ) : (
          <h1>Sorry No Products Available :(.</h1>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
