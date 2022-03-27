export function productBrandFilter(products, value, field) {
  return products.filter((product) =>
    value.some((sortValue) => sortValue === product[field])
  );
}
