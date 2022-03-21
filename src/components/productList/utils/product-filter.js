import productCheckbox from "./product-checkbox";
import productSort from "./product-sort";

export const productFilter = (products, selectedFilters = {}) => {
  let filteredProduct = [...products];
  Object.keys(selectedFilters).forEach((paramFilter) => {
    const { type, data } = selectedFilters[paramFilter];

    if (type === "sort" && data.length > 0) {
      filteredProduct = productSort(filteredProduct, data, paramFilter);
      console.log("Sorted Data", filteredProduct);
    }
    if (type === "checkbox" && data.length > 0) {
      filteredProduct = productCheckbox(filteredProduct, data, paramFilter);
    }
  });
  return filteredProduct;
};
