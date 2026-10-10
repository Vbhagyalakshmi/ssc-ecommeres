"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import ProductImage from "./ProductImage";
import { categories, getCategoryProducts, products } from "@/lib/data";

export default function CatalogPage({ categorySlug, initialSearch = "" }) {
  const category = categories.find(({ slug }) => slug === categorySlug);
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("newest");
  const [maxPrice, setMaxPrice] = useState("");
  const [shopCategory, setShopCategory] = useState("all");
  const categoryProducts = categorySlug ? getCategoryProducts(categorySlug) : products;
  const filtered = useMemo(() => {
    let result = categoryProducts.filter((product) =>
      `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search.trim().toLowerCase()));
    if (!categorySlug && shopCategory !== "all") result = result.filter(({ category: slug }) => slug === shopCategory);
    if (maxPrice !== "") result = result.filter(({ salePrice, price }) => (salePrice || price) <= Number(maxPrice));
    return [...result].sort((a, b) => {
      if (sort === "price-low") return (a.salePrice || a.price) - (b.salePrice || b.price);
      if (sort === "price-high") return (b.salePrice || b.price) - (a.salePrice || a.price);
      return Number(b.isNew) - Number(a.isNew) || b.id.localeCompare(a.id);
    });
  }, [categoryProducts, categorySlug, maxPrice, search, shopCategory, sort]);

  const title = category?.name || "Shop All";
  const intro = category?.intro || "Explore the complete Sac Luxe collection, thoughtfully selected for lasting style.";

  return (
    <>
      <Header />
      <main>
        {category && <section className="category-hero">
          <ProductImage src={category.heroImage} alt="" aria-hidden="true" />
          <div className="category-hero-overlay" />
          <div className="container category-hero-copy"><p className="eyebrow">The Sac Luxe Edit</p><h1>{title}</h1><p>{intro}</p></div>
        </section>}
        <section className="container catalog">
          <div className="catalog-title">
            <div><p className="eyebrow dark">{category ? "Discover the edit" : "The complete collection"}</p><h1>{title}</h1><p className="sub">{intro}</p></div>
            <p className="product-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "piece" : "pieces"}</p>
          </div>
          {!categorySlug && <div className="shop-category-links" aria-label="Shop by category">
            {categories.map(({ name, slug }) => <Link key={slug} href={`/categories/${slug}`}>{name}</Link>)}
          </div>}
          <div className="catalog-controls">
            <label className="search-field">Search this collection<input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${title.toLowerCase()}...`} /></label>
            {!categorySlug && <label>Category<select value={shopCategory} onChange={(event) => setShopCategory(event.target.value)}><option value="all">All categories</option>{categories.slice(0, 6).map(({ name, slug }) => <option key={slug} value={slug}>{name}</option>)}</select></label>}
            <label>Maximum price<input type="number" min="0" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} placeholder="No limit" /></label>
            <label>Sort by<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
          </div>
          {filtered.length ? <div className="grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <p className="empty-state">No pieces match those filters. Try a different search or price.</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}
