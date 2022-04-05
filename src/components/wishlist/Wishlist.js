import { useData } from "../../Context";
import WishlistCard from "../productCards/WishlistCard";
import "./wishlist.css";

const Wishlist = () => {
  const {
    state: { wishlistItems },
  } = useData();

  return (
    <main className='wishlist-container'>
      <div className='wishlist-head flex jc-center'>
        <h1>Wishlist</h1>
      </div>
      <section className='pd-container-main'>
        <div className='pd-wrapper flex jc-center flex-gap flex-wrap'>
          {wishlistItems.length > 0 ? (
            wishlistItems.map((product) => (
              <WishlistCard
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
            <h1>You Don't have wishlist Products</h1>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
