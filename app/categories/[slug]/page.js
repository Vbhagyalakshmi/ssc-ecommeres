import { notFound } from "next/navigation";
import CatalogPage from "@/components/CatalogPage";
import { categories } from "@/lib/data";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export default function CategoryPage({ params }) {
  if (!categories.some(({ slug }) => slug === params.slug)) notFound();
  return <CatalogPage categorySlug={params.slug} />;
}
