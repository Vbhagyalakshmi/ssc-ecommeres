"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";
import { promise, products, categories } from "@/lib/data";

const icons = {
  ship: <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a1.5 1.5 0 1 0 0-.01M17 19a1.5 1.5 0 1 0 0-.01" />,
  quality: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" />,
  lock: <path d="M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3" />,
};

export default function Store() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <Header />
      <Hero />

      <section className="promise container">
        <h2>The Sac Luxe Promise</h2>
        <p className="sub">Every piece is chosen for craft, quality and lasting style.</p>
        <div className="promise-grid">
          {promise.map((p) => (
            <div key={p.title} className="promise-item">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">{icons[p.icon]}</svg>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="container products">
        <div className="section-head">
          <div>
            <p className="eyebrow dark">Available now</p>
            <h2>Products</h2>
          </div>
          <Link href="/shop" className="link">View all</Link>
        </div>
        <div className="grid">
          {products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container categories">
        <h2>Shop by Category</h2>
        <div className="cat-grid">
          {categories.slice(0, 4).map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="cat-tile">
              <ProductImage src={category.heroImage} alt={category.name} loading="lazy" />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/categories" className="link category-view-all">View all categories</Link>
      </section>

      <section className="newsletter">
        <div className="container narrow">
          <h2>Join the Sac Luxe Circle</h2>
          <p className="sub">Early access to new arrivals and private sales.</p>
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
            <input type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn">{done ? "Subscribed" : "Subscribe"}</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
