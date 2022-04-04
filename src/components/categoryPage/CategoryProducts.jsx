import {useParams} from "react-router-dom";
import { useData } from "../../Context/stateManage/state-context";
import ProductCard from "../productCards/ProductCard";
const CategoryProducts = ()=>{

    const {state:{products}} = useData()

    const {categoryParam} = useParams();

    const filterProducts = products.filter(product=> product.category === categoryParam);
    console.log(filterProducts)

    console.log(categoryParam)
    return  <section className='pd-container'>
        <h1>All {categoryParam} Products</h1>
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
              product={product}
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
        </div>
    </section>
}

export default CategoryProducts;