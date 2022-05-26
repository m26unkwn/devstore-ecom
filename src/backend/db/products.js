import { v4 as uuid } from "uuid";
import { Sticker, Bag, Hat } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "DEV Snapback Cap",
    desc: "black Devloper Hat",
    price: 40,
    prev_price: 80,
    discount: 50,
    category: "hat",
    img: Hat,
    brand: "dev",
    description: [
      "Structured, 6-panel, high-profile",
      "Plastic snap closure",
      "Green under visor",
    ],
    rating: 4,
    qty: 1,
  },

  {
    _id: uuid(),
    title: " Sticker Pack ",
    desc: " Developer Sticker Collection",
    price: 16,
    prev_price: 32,
    discount: 50,
    category: "sticker",
    brand: "github",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/Sticker_Collage_2019_1024x1024.png",
    description: [
      "Stickers are die-cut, a mix of glossy and matte, and range in widths from 2”-6”",

      "Stickers pictured are not to scale.",
      " Stickers ship separately from other items.",
    ],
    rating: 2,
    qty: 1,
  },

  {
    _id: uuid(),
    title: "“Computers, amirite?” Mug ",
    desc: "White Apple Mug",
    price: 80,
    prev_price: 160,
    discount: 50,
    category: "mug",
    brand: "apple",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/white-glossy-mug-11oz-handle-on-right-622643fa5ad09_1024x1024.jpg",
    description: [
      " This mug will end the meeting the moment you arrive because, well, what else is there to say? This glossy ceramic mug is safe for the dishwasher and the microwave!",
    ],
    rating: 1,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Github Sticker ",
    desc: "Cat Github Sticker",
    price: 6,
    prev_price: 12,
    discount: 50,
    category: "sticker",
    img: Sticker,
    inStock: false,
    rating: 4,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Dev Bag ",
    desc: "Black Bag Leather",
    price: 6,
    prev_price: 12,
    discount: 50,
    category: "bag",
    img: Bag,
    inStock: false,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Github InvertoCat Mug ",
    desc: "Github Black Matte Mug",
    price: 150,
    prev_price: 300,
    discount: 50,
    category: "mug",
    brand: "github",
    img: "https://cdn.shopify.com/s/files/1/0051/4802/products/3026GHB-Grey_882x882.jpg",
    description: [
      "12oz stoneware mug",
      "Matte outside - glossy color inside",
      "Hand wash recommended",
      "Microwave safe",
    ],
    inStock: true,
    rating: 3,
    qty: 1,
  },
  {
    _id: uuid(),
    title: " CodeNewbie Sticker Pack",
    desc: " Developer Sticker Collection",
    price: 20,
    prev_price: 40,
    discount: 50,
    category: "sticker",
    brand: "apple",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/custom_resized_af6cf36b-42a8-423f-bb05-ca150f5d7bb1_1024x1024.jpg",
    description: [
      "Stickers are die-cut, a mix of glossy and matte, and range in widths from 2”-6”",

      "Stickers pictured are not to scale.",
      " Stickers ship separately from other items.",
    ],
    inStock: true,
    rating: 2,
    qty: 1,
  },

  {
    _id: uuid(),
    title: "Github Cat Stiker Pack ",
    desc: "Coding Stikers for Newbiew",
    price: 18,
    prev_price: 36,
    discount: 50,
    brand: "github",
    category: "sticker",
    img: "https://cdn.shopify.com/s/files/1/0051/4802/products/Capsule_Pack_10_882x882.jpg",
    description: ["These are the high Quality Stickers."],
    rating: 4,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Google CodenewBiew Hat",
    desc: "Grey CodenewBie Hat",
    price: 20,
    prev_price: 40,
    discount: 50,
    category: "hat",
    brand: "google",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/vintage-cap-black-front-6220d4bc67628_1024x1024.jpg?",
    description: [
      "100% cotton twill",
      "6-panel unstructured cap with a low profile",
      " Black sweatband",
      "Washed-out vintage effect",
    ],
    rating: 5,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "DEV Rainbow Mug",
    desc: "White Rainbow Mug",
    price: 60,
    prev_price: 120,
    discount: 50,
    category: "mug",
    brand: "dev",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/mockup-22c8b531_1024x1024.jpg",
    rating: 3,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Github Sticker ",
    desc: "Cat Github Sticker",
    price: 6,
    prev_price: 12,
    discount: 50,
    category: "sticker",
    brand: "github",
    img: "https://ih1.redbubble.net/image.991044537.9947/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    description: [
      "Decorate and personalize laptops, windows, and more",
      "Removable, kiss-cut vinyl stickers",
      "Super durable and water-resistant",
    ],
    rating: 4,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Dev Bag ",
    desc: "Black Bag Leather",
    price: 6,
    prev_price: 12,
    discount: 50,
    category: "bag",
    brand: "google",
    img: Bag,
    description: [
      "Made from 100% polyester",
      "Water-resistant material",
      "Large inside pocket with a separate pocket for a 15” laptop, front pocket with a zipper, and a hidden pocket with zipper on the back of the bag",
    ],
    rating: 5,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Github Cat Black Mug ",
    desc: "Github Black Matte Mug",
    price: 100,
    prev_price: 200,
    discount: 50,
    category: "mug",
    brand: "github",
    img: "https://cdn.shopify.com/s/files/1/0051/4802/products/Webshop_18949_DCC1023_IE313_WHT_882x882.jpg",
    description: [
      "Cat Printed",
      "Black print area",
      "Color rim, inside, and handle",
      "Dishwasher and microwave safe",
    ],
    rating: 5,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Rainbow DEV Backpack",
    desc: "Black Bag Leather",
    price: 100,
    prev_price: 200,
    discount: 50,
    category: "bag",
    brand: "dev",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/mockup-e36fb28e_1024x1024.jpg",
    description: [
      "Made from 100% polyester",
      "Water-resistant material",
      "Large inside pocket with a separate pocket for a 15” laptop, front pocket with a zipper, and a hidden pocket with zipper on the back of the bag",
    ],
    rating: 3,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Vintage DEV Baseball Cap (Acid Wash Red)",
    desc: "Baseball CAP",
    price: 30,
    prev_price: 60,
    discount: 50,
    category: "hat",
    brand: "dev",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/mockup-33be0b9e_1024x1024.jpg?v=1558460256",
    description: [
      " 100% cotton twill",
      "6-panel unstructured cap with a low profile",
      "6 sewn eyelets",
      "Black sweatband",
    ],
    rating: 1,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "“CodeNewbie Coffee Mug ",
    desc: "Apple CodeNewbie Mug",
    price: 200,
    prev_price: 400,
    discount: 50,
    category: "mug",
    brand: "apple",
    img: "https://cdn.shopify.com/s/files/1/1626/8507/products/white-ceramic-mug-with-color-inside-black-11oz-front-621fe408e9527_1024x1024.jpg",
    description: [
      "Ceramic",
      "White print area",
      "Color rim, inside, and handle",
      "Dishwasher and microwave safe",
    ],
    rating: 2,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "Don't Stop ",
    desc: "Motivation Stikers",
    price: 4,
    prev_price: 8,
    discount: 50,
    category: "sticker",
    img: Sticker,
    brand: "apple",
    inStock: false,
    rating: 4,
    qty: 1,
  },
  {
    _id: uuid(),
    title: "InvertoCat Hat Charcoal",
    desc: "Charcoal Cap",
    price: 25,
    prev_price: 50,
    discount: 50,
    category: "hat",
    brand: "github",
    img: "https://cdn.shopify.com/s/files/1/0051/4802/products/Hat_Mock_GithubShop-Charcoal1_882x882.jpg",
    description: [
      " 100% cotton twill",
      "Charecoal ",
      "6 sewn eyelets",
      "Black sweatband",
    ],
    rating: 5,
    qty: 1,
  },
];
