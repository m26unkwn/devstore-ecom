export default function filterByRating(allProducts, rating) {
  let products = [...allProducts];
  if (rating === 0) {
    return products;
  }
  return products.filter((product) => product.rating === Number(rating));
}
