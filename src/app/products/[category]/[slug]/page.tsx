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

  const wa    = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const waMsg = encodeURIComponent(
    `Hello Paperboat Gifts! 🎁\n\nI'd like to order:\n\n*Product:* ${product.name}\n*Price:* ${product.priceLabel}\n\nPlease guide me on customization and delivery.`
  );

  return (
    <>
      <ProductDetailView product={product} wa={wa} waMsg={waMsg} />
      <CTASection />
    </>
  );
}
