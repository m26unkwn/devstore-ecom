import { Filter,AllProducts } from "../../components";
import "./productlist.css"

 const ProductList = () => {
  return (
    <main className='filter-product-wrapper'>
      <Filter />
      <AllProducts />
    </main>
  );
};

export default ProductList;