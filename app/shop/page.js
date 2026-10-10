import CatalogPage from "@/components/CatalogPage";

export default function ShopPage({ searchParams }) {
  return <CatalogPage initialSearch={searchParams?.search || ""} />;
}
