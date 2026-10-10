"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { announcement, categories } from "@/lib/data";
import { useShop } from "./ShopContext";

const iconProps = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true };

export default function Header() {
  const { cartCount, wishlist } = useShop();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const root = useRef(null);
  const menuId = "category-menu";

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="announce">{announcement}</div>
      <div className="bar container">
        <button className="mobile-toggle icon-button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="main-navigation" onClick={() => setMobileOpen((value) => !value)}>
          <span className="menu-lines" />
        </button>
        <nav id="main-navigation" className={`nav ${mobileOpen ? "mobile-open" : ""}`} aria-label="Main navigation">
          <Link href="/" onClick={closeMenus}>Home</Link>
          <div className="category-nav" ref={root} onMouseEnter={() => {
            if (!window.matchMedia("(max-width: 900px)").matches) setOpen(true);
          }}>
            <button className="category-trigger" aria-expanded={open} aria-controls={`${menuId} mobile-category-links`} onClick={() => {
              if (window.matchMedia("(max-width: 900px)").matches) setOpen((value) => !value);
              else setOpen(true);
            }} onKeyDown={(event) => {
              if (event.key === "ArrowDown") { event.preventDefault(); setOpen(true); }
            }}>
              Categories <span aria-hidden="true">⌄</span>
            </button>
            <div id={menuId} className={`category-dropdown ${open ? "is-open" : ""}`} hidden={!open}>
              {categories.map(({ slug, name }) => <Link key={slug} href={`/categories/${slug}`} onClick={closeMenus}>{name}</Link>)}
              <Link className="all-categories" href="/categories" onClick={closeMenus}>View All Categories</Link>
            </div>
          </div>
          <Link href="/shop" onClick={closeMenus}>Shop</Link>
          <a href="mailto:hello@sacluxe.example" onClick={closeMenus}>Contact</a>
          <div id="mobile-category-links" className={`mobile-category-list ${open ? "expanded" : ""}`} aria-label="Shop categories" hidden={!open}>
            {categories.map(({ slug, name }) => <Link key={slug} href={`/categories/${slug}`} onClick={closeMenus}>{name}</Link>)}
            <Link className="all-categories" href="/categories" onClick={closeMenus}>View All Categories</Link>
          </div>
        </nav>
        <Link href="/" className="logo" onClick={closeMenus}>SAC LUXE</Link>
        <div className="header-actions">
          <Link href="/shop?search=" className="icon-button" aria-label="Search">
            <svg {...iconProps}><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
          </Link>
          <Link href="/wishlist" className="icon-button count-link" aria-label={`Wishlist, ${wishlist.length} items`}>
            <svg {...iconProps}><path d="M20.8 8.7c0 5-8.8 10.3-8.8 10.3S3.2 13.7 3.2 8.7a4.4 4.4 0 0 1 8.8-1.1 4.4 4.4 0 0 1 8.8 1.1Z" /></svg>
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>
          <Link href="/cart" className="icon-button count-link" aria-label={`Cart, ${cartCount} items`}>
            <svg {...iconProps}><path d="M6 7h12l1 13H5L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
