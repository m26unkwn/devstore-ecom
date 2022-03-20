import { v4 as uuid } from "uuid";
import { Sticker, Tees, Bag, Hat } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    link: "/products/sticker",
    img: Sticker,
    categoryName: "Stickers",
  },
  {
    _id: uuid(),
    link: "/products/tees",
    img: Tees,
    categoryName: "T-Shirts",
  },
  {
    _id: uuid(),
    link: "/products/hat",
    img: Hat,
    categoryName: "Hats",
  },
  {
    _id: uuid(),
    link: "/products/Bag",
    img: Bag,
    categoryName: "Bag",
  },
];
