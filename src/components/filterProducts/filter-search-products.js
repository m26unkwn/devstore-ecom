export default function filterSearchProducts(products, search) {
  return products.filter(
    ({ title, category, desc }) =>
      title.toLowerCase().includes(search) ||
      category.toLowerCase().includes(search) ||
      desc.toLowerCase().includes(search)
  );
}
