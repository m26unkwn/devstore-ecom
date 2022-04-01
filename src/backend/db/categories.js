import { v4 as uuid } from "uuid";
import { Sticker, Mug, Bag, Hat } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    link: "/products/sticker",
    img: Sticker,
    categoryName: "sticker",
  },
  {
    _id: uuid(),
    link: "/products/tees",
    img: Mug,
    categoryName: "mug",
  },
  {
    _id: uuid(),
    link: "/products/hat",
    img: Hat,
    categoryName: "hat",
  },
  {
    _id: uuid(),
    link: "/products/Bag",
    img: Bag,
    categoryName: "bag",
  },
];
