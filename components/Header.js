import { announcement, nav } from "@/lib/data";

export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="announce">{announcement}</div>
      <div className="bar container">
        <nav className="nav">
          {nav.map((n) => (<a key={n} href="#products">{n}</a>))}
        </nav>
        <a href="/" className="logo">SAC LUXE</a>
        <a href="#products" className="cart" aria-label="Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </a>
      </div>
    </header>
  );
}
