import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import CTASection from "@/components/sections/CTASection";
import ProductDetailView from "./ProductDetailView";

interface Props { params: Promise<{ category: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product Not Found" };
  return { title: p.name, description: p.description };
}

export async function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, category } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  return (
    <>
      <ProductDetailView product={product} />
      <CTASection />
    </>
  );
}
