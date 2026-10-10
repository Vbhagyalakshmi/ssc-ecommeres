"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("sac-luxe-cart") || "[]");
      const savedWishlist = JSON.parse(localStorage.getItem("sac-luxe-wishlist") || "[]");
      if (Array.isArray(savedCart)) setCart(savedCart);
      if (Array.isArray(savedWishlist)) setWishlist(savedWishlist);
    } catch (error) {
      console.error("Unable to restore your saved shopping bag.", error);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("sac-luxe-cart", JSON.stringify(cart));
    localStorage.setItem("sac-luxe-wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist, ready]);

  const value = useMemo(() => ({
    cart,
    wishlist,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    addToCart: (product, quantity = 1, variant = {}) => {
      setCart((current) => {
        const key = `${product.id}:${variant.color || ""}:${variant.size || ""}`;
        const match = current.find((item) => item.key === key);
        if (match) return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item);
        return [...current, { key, product, quantity, variant }];
      });
    },
    updateQuantity: (key, quantity) => setCart((current) =>
      quantity < 1 ? current.filter((item) => item.key !== key) :
        current.map((item) => item.key === key ? { ...item, quantity } : item)),
    removeFromCart: (key) => setCart((current) => current.filter((item) => item.key !== key)),
    toggleWishlist: (product) => setWishlist((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product]),
  }), [cart, wishlist]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider.");
  return context;
}
