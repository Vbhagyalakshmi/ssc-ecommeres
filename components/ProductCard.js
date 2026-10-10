"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { useShop } from "./ShopContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const wished = wishlist.some(({ id }) => id === product.id);
  return (
    <article className="card">
      <div className="thumb">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductImage src={product.image} alt={product.name} loading="lazy" />
        </Link>
        {product.isNew && <span className="product-tag">New</span>}
        {product.isSale && <span className="product-tag sale-tag">Sale</span>}
        <button className={`wishlist-toggle ${wished ? "selected" : ""}`} onClick={() => toggleWishlist(product)} aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} aria-pressed={wished}>♡</button>
        <button className="add" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      <p className="cat">{product.category.replace("-", " ")}</p>
      <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
      <p className="price">{product.salePrice ? <><strong>{formatPrice(product.salePrice)}</strong> <del>{formatPrice(product.price)}</del></> : formatPrice(product.price)}</p>
    </article>
  );
}
