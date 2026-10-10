"use client";

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";
import { categories } from "@/lib/data";
import { useShop } from "./ShopContext";

export function AllCategoriesPage() {
  return <><Header /><main className="container all-categories-page"><p className="eyebrow dark">Find your edit</p><h1>Shop by Category</h1><div className="all-category-grid">{categories.map(({ name, slug, intro, heroImage }) => <Link className="all-category-card" href={`/categories/${slug}`} key={slug}><ProductImage src={heroImage} alt={`${name} collection`} /><span><strong>{name}</strong><small>{intro}</small></span></Link>)}</div></main><Footer /></>;
}

export function SavedItemsPage({ mode }) {
  const { cart, wishlist, updateQuantity, removeFromCart, toggleWishlist } = useShop();
  const saved = mode === "cart" ? cart : wishlist.map((product) => ({ product, key: product.id, quantity: 1 }));
  const total = cart.reduce((sum, item) => sum + (item.product.salePrice || item.product.price) * item.quantity, 0);
  return <><Header /><main className="container saved-page"><p className="eyebrow dark">Your Sac Luxe</p><h1>{mode === "cart" ? "Shopping Bag" : "Wishlist"}</h1>{saved.length === 0 ? <p className="empty-state">There are no pieces here just yet. <Link href="/shop">Explore the collection</Link>.</p> : <div className="saved-list">{saved.map(({ product, key, quantity, variant }) => <article className="saved-item" key={key}><Link href={`/products/${product.slug}`}><ProductImage src={product.image} alt={product.name} /></Link><div className="saved-item-copy"><p className="cat">{product.category.replace("-", " ")}</p><h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2>{variant && <p>{[variant.color, variant.size].filter(Boolean).join(" / ")}</p>}<p>${(product.salePrice || product.price).toLocaleString("en-US")}</p>{mode === "cart" && <label>Quantity<input type="number" min="1" max={product.stock} value={quantity} onChange={(event) => updateQuantity(key, Number(event.target.value))} /></label>} <button className="text-button" onClick={() => mode === "cart" ? removeFromCart(key) : toggleWishlist(product)}>{mode === "cart" ? "Remove" : "Remove from wishlist"}</button></div></article>)}</div>}{mode === "cart" && saved.length > 0 && <p className="cart-total">Subtotal <strong>${total.toLocaleString("en-US")}</strong></p>}{mode === "cart" && <p className="detail-note">Checkout is not connected yet; see the README for production integration notes.</p>}</main><Footer /></>;
}
