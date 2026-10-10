"use client";
import { useEffect, useState } from "react";
import { slides } from "@/lib/data";
import Link from "next/link";
import ProductImage from "./ProductImage";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      {slides.map((s, idx) => (
        <div key={s.title} className={`slide ${idx === i ? "active" : ""}`} aria-hidden={idx !== i}>
          <ProductImage src={s.image} alt={s.title} />
          <div className="overlay" />
          <div className="slide-copy container">
            <p className="eyebrow">{s.eyebrow}</p>
            <h1>{s.title}</h1>
            <p className="lead">{s.text}</p>
            <Link href={s.href} className="btn">Shop Now</Link>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((s, idx) => (
          <button key={s.title} className={idx === i ? "on" : ""} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}
