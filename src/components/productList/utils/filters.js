const sort = [
  { id: 5325321, name: "sort", value: "low_to_high", label: "Low to High" },
  { id: 223525235, name: "sort", value: "high_to_low", label: "High to Low" },
];

const category = [
  {
    id: 1,
    name: "Hat",
    value: "hat",
    label: "Hat",
  },
  {
    id: 2,
    name: "Stickers",
    value: "sticker",
    label: "Stickers",
  },
  {
    id: 3,
    name: "Mug",
    value: "mug",
    label: "Mug",
  },
  {
    id: 4,
    name: "bagpack",
    value: "bag",
    label: "Backpack",
  },
];

const brands = [
  {
    id: 1,
    name: "apple",
    value: "apple",
    label: "Apple",
  },
  {
    id: 2,
    name: "google",
    value: "google",
    label: "Google",
  },
  {
    id: 3,
    name: "dev",
    value: "dev",
    label: "Dev",
  },
  {
    id: 4,
    name: "github",
    value: "github",
    label: "Github",
  },
];

export const filters = [
  {
    name: "Sort",
    parameter: "price",
    type: "sort",
    data: sort,
  },
  {
    name: "Category",
    parameter: "category",
    type: "checkbox",
    data: category,
  },
  {
    name: "Brands",
    parameter: "brand",
    type: "checkboxBrand",
    data: brands,
  },
];
