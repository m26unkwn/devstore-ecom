import { Filter,AllProducts } from "../components";
import "./productlist.css"

export const ProductList = () => {
  return (
    <main className='filter-product-wrapper'>
      <Filter />
      <AllProducts />
    </main>
  );
};
