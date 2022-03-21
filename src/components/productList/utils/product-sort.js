export function productSort(products, value, field) {
  if (value[0] === "low_to_high") {
    return products.sort((a, b) => a[field] - b[field]);
  }
  return products.sort((a, b) => b[field] - a[field]);
}
