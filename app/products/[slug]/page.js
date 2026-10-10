import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default function ProductPage({ params }) {
  const product = products.find(({ slug }) => slug === params.slug);
  if (!product) notFound();
  return <ProductDetails product={product} />;
}
