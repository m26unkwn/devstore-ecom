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
    <main className='pd-container'>
      {filterProducts.length > 0 ? (
        <>
          <div className='wishlist-head flex jc-center'>
            <h4
              className='pd-desc'
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
              }}>
              Found Items for "{searchQuery}" ({filterProducts.length})
            </h4>
          </div>
          <section className='pd-container-main'>
            <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
              {filterProducts.map((product) => (
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
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className=' flex jc-center flex-col ai-center flex-gap'>
          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
            className='pd-desc'>
            Oh! No search results for {searchQuery}
          </h3>
          <h4
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
            className='pd-desc'>
            You can look for different Products
          </h4>
          <button className='btn'>
            <Link to='/products' className='btn-link'>
              Shop Now
            </Link>
          </button>
        </div>
      )}
    </main>
  );
};
export default FilterProducts;
