import { productCheckbox } from "./product-checkbox";
import { productSort } from "./product-sort";


export default function filteredProduct(products, selectedFilters = {}) {
  let filteredProducts = [...products];
  Object.keys(selectedFilters).forEach((filterPram) => {
    const { type, data } = selectedFilters[filterPram];
    if (type === "sort" && data.length > 0) {
      filteredProducts = productSort(filteredProducts, data, filterPram);
    }
    if (type === "checkbox" && data.length > 0) {
      filteredProducts = productCheckbox(filteredProducts, data, filterPram);
    }
  });
  return filteredProducts;
}
