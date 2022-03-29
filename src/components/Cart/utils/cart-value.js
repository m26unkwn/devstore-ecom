export function cartValueCalc(cartItems) {
  return cartItems.reduce(
    (acc, curr) => {
      return {
        price: acc.price + curr.prev_price * curr.qty,
        discount:
          acc.discount + (curr.prev_price * curr.qty * curr.discount) / 100,
        totalprice: acc.totalprice + curr.price * curr.qty,
      };
    },
    { price: 0, discount: 0, totalprice: 0 }
  );
}
