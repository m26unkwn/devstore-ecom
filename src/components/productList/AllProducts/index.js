import ProductCard from "../../productCards/ProductCard";

import { useData } from "../../../Context";

import productFilter from "../utils/product-filter";
import filterByRating from "../utils/rating-filter";

export const AllProducts = () => {
  const {
    state: { products, selectedFilters },
  } = useData();

  const filters = productFilter(products, selectedFilters);
  const filterProduct = filterByRating(filters, selectedFilters.rating);

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
              inStock={product.inStock}
              rating={product.rating}
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
