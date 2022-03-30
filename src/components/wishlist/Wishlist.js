import { useData } from "../../Context/stateManage/state-context";
import WishlistCard from "../Nuclie/WishlistCard";
import "./wishlist.css";

const Wishlist = () => {
  const {
    state: { wishlistItems },
  } = useData();

  return (
    <main class='wishlist-container'>
      <div class='wishlist-head flex jc-center'>
        <h1>Wishlist</h1>
      </div>
      <section class='pd-container-main'>
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
      </section>
    </main>
  );
};

export default Wishlist;
