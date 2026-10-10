"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";
import { formatPrice, products } from "@/lib/data";
import { useShop } from "./ShopContext";

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [color, setColor] = useState(product.colors[0] || "");
  const [size, setSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useShop();
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main className="container detail-page">
        <p className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/categories/${product.category}`}>{product.category.replace("-", " ")}</Link> / {product.name}</p>
        <div className="detail-layout">
          <div className="detail-gallery">
            <ProductImage className="detail-main-image" src={selectedImage} alt={product.name} />
            {product.images.length > 1 && <div className="gallery-thumbnails">{product.images.map((image, index) => <button key={image} onClick={() => setSelectedImage(image)} aria-label={`View image ${index + 1}`}><ProductImage src={image} alt="" /></button>)}</div>}
          </div>
          <div className="detail-copy">
            <p className="eyebrow dark">{product.category.replace("-", " ")}</p>
            <h1>{product.name}</h1>
            <p className="detail-price">{product.salePrice ? <><strong>{formatPrice(product.salePrice)}</strong> <del>{formatPrice(product.price)}</del></> : formatPrice(product.price)}</p>
            <p className="detail-description">{product.description}</p>
            {product.colors.length > 0 && <fieldset className="variant-options"><legend>Color: <strong>{color}</strong></legend><div>{product.colors.map((option) => <button key={option} className={color === option ? "variant-selected" : ""} onClick={() => setColor(option)} aria-pressed={color === option}>{option}</button>)}</div></fieldset>}
            {product.sizes.length > 0 && <fieldset className="variant-options"><legend>Size: <strong>{size}</strong></legend><div>{product.sizes.map((option) => <button key={option} className={size === option ? "variant-selected" : ""} onClick={() => setSize(option)} aria-pressed={size === option}>{option}</button>)}</div></fieldset>}
            <p className="stock-status">{product.stock > 0 ? `${product.stock} available` : "Currently unavailable"}</p>
            <div className="purchase-actions"><label>Quantity<input type="number" min="1" max={product.stock} value={quantity} onChange={(event) => setQuantity(Math.max(1, Math.min(product.stock, Number(event.target.value) || 1)))} /></label>
              <button className="btn purchase-button" disabled={product.stock < 1} onClick={() => { addToCart(product, quantity, { color, size }); setAdded(true); }}>{added ? "Added to Bag" : "Add to Bag"}</button></div>
            <p className="detail-note">Complimentary worldwide shipping on orders over $250.</p>
          </div>
        </div>
        {related.length > 0 && <section className="related-products"><div className="section-head"><div><p className="eyebrow dark">Complete the edit</p><h2>You may also like</h2></div></div><div className="grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>}
      </main>
      <Footer />
    </>
  );
}
