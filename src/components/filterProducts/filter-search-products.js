export default function filterSearchProducts(products, search) {
  return products.filter(
    ({ title, category, desc }) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      category.toLowerCase().includes(search.toLowerCase()) ||
      desc.toLowerCase().includes(search.toLowerCase())
  );
}
