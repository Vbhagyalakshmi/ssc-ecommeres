// Set to "" after running `npm run images` to serve images locally from /public/assets
export const BASE = "https://storefront-spark-34.lovable.app";

export const IMAGES = {
  "hero-1": "/assets/hero-1-B2z4lJjJ.jpg",
  "hero-2": "/assets/hero-2-DDyqZI1-.jpg",
  "hero-3": "/assets/hero-3-B6ZBs93w.jpg",
  "hero-4": "/assets/hero-4-et-rb63o.jpg",
  gown: "/assets/p-gown-CZIofiwO.jpg",
  coat: "/assets/p-coat-DW40Qt2x.jpg",
  oxford: "/assets/p-oxford-DHVFuLSr.jpg",
  tote: "/assets/p-tote-t4q76JIN.jpg",
  watch: "/assets/p-watch-BdWWsDxJ.jpg",
  ring: "/assets/p-ring-BPEgzelO.jpg",
  headphones: "/assets/p-headphones-DKNrXA9w.jpg",
};
export const img = (key) => BASE + IMAGES[key];

export const announcement = "Complimentary worldwide shipping on orders over $250";
export const nav = ["Women", "Men", "Bags", "Jewelry", "Gifts"];

export const slides = [
  { eyebrow: "New Season 2026", title: "Effortless Elegance", text: "Silk gowns and tailored pieces, crafted for unforgettable evenings.", image: "hero-1" },
  { eyebrow: "The Tailoring Edit", title: "Sharp. Timeless. Yours.", text: "Signature blazers cut from the finest Italian wool.", image: "hero-2" },
  { eyebrow: "Bags & Watches", title: "Crafted to Endure", text: "Hand-finished leather and precision movements in polished gold.", image: "hero-3" },
  { eyebrow: "Fragrance & Jewelry", title: "The Finishing Touch", text: "Rare scents and pearls to complete every look.", image: "hero-4" },
];

export const promise = [
  { title: "Worldwide Shipping", text: "Fast, insured delivery to over 120 countries.", icon: "ship" },
  { title: "Premium Quality", text: "Authentic pieces from master artisans.", icon: "quality" },
  { title: "Secure Payments", text: "Encrypted checkout with every major method.", icon: "lock" },
];

export const products = [
  { id: 1, name: "Silk Evening Gown", category: "Women's Fashion", price: 890, image: "gown" },
  { id: 2, name: "Tailored Wool Coat", category: "Men's Fashion", price: 640, image: "coat" },
  { id: 3, name: "Leather Oxford", category: "Footwear", price: 245, image: "oxford" },
  { id: 4, name: "Structured Leather Tote", category: "Bags", price: 485, image: "tote" },
  { id: 5, name: "Gold Automatic Watch", category: "Watches", price: 1280, image: "watch" },
  { id: 6, name: "Solitaire Ring", category: "Jewelry", price: 960, image: "ring" },
  { id: 7, name: "Studio Wireless Headphones", category: "Electronics", price: 325, image: "headphones" },
];

export const categories = [
  { name: "Women", image: "gown" },
  { name: "Men", image: "coat" },
  { name: "Bags", image: "tote" },
  { name: "Watches", image: "watch" },
];

export const footer = {
  tagline: "Curated luxury since 2026.",
  columns: [
    { title: "Shop", links: ["Women", "Men", "Bags", "Jewelry"] },
    { title: "Help", links: ["Shipping", "Returns", "FAQ", "Contact"] },
    { title: "About", links: ["Our Story", "Craft", "Privacy"] },
  ],
};
