import { useLocation, Link } from "react-router-dom";
import { useData } from "../../Context/stateManage/state-context";
import ProductCard from "../productCards/ProductCard";
import filterSearchProducts from "./filter-search-products";

const FilterProducts = () => {
  const {
    state: { products },
  } = useData();
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const searchQuery = searchParam.get("filter");

  const filterProducts = filterSearchProducts(products, searchQuery);

  return (
    <div>
      <main className='pd-container'>
        <div className='wishlist-head flex jc-center'>
          <h1>Found Items ({filterProducts.length})</h1>
        </div>
        <section className='pd-container-main'>
          <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
            {filterProducts.length > 0 ? (
              filterProducts.map((product) => (
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
              <div className=' flex jc-center flex-col ai-center flex-gap'>
                <h3 style={{ fontSize: "2rem" }} className='pd-desc'>
                  Sorry We could not find any Products
                </h3>
                <h4 style={{ fontSize: "1.5rem" }} className='pd-desc'>
                  You can look for different Products
                </h4>

                <button className='btn'>
                  <Link to='/products' className='btn-link'>
                    Shop Now
                  </Link>
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
export default FilterProducts;
