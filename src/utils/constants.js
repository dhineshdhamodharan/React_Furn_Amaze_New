import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our Mission is to enable our clients to optimise the value and return on their property asset through the design and delivery of inspiring and environmentally sustainable commercial interiors.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to conduct our business responsibly to create and deliver project solutions that establish standards by which other companies will measure performance.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Established in the year 1999 at Chennai (Tamil Nadu, India), “Furn World” is renowned as one of the finest Manufacturer, Exporter and Supplier of various types of Furniture.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
