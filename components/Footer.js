import Link from "next/link";
import { footer } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div><Link href="/" className="logo">SAC LUXE</Link><p>{footer.tagline}</p></div>
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            <ul>{column.links.map(({ label, href }) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
