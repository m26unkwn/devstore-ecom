export function productCheckbox(products, value, field) {
  return products.filter((product) =>
    value.some((sortValue) => sortValue === product[field])
  );
}
