import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Container, Grid, Typography } from "@mui/material";
import { getProductsByCategory, getCategoryMeta, type ProductCategory } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import CTASection from "@/components/sections/CTASection";
import { BRAND } from "@/lib/theme";

interface Props { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category as ProductCategory);
  if (!meta) return { title: "Products" };
  return {
    title:       meta.label,
    description: meta.description,
  };
}

export async function generateStaticParams() {
  return ["frames","polaroids","albums","miniatures","magnets"].map((c) => ({ category: c }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta     = getCategoryMeta(category as ProductCategory);
  if (!meta) notFound();
  const products = getProductsByCategory(category as ProductCategory);

  return (
    <>
      {/* Header */}
      <Box sx={{
        pt: 14, pb: 10,
        background: `linear-gradient(145deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`,
        position: "relative",
      }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 2 }}>
            {meta.icon} {meta.plural}
          </Typography>
          <Typography variant="h1" sx={{ color: "#FDFBFF", fontSize: { xs: "2.4rem", md: "3.8rem" }, mb: 3 }}>
            {meta.label}
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(253,251,255,0.68)", fontSize: { xs: "1.05rem", md: "1.25rem" } }}>
            {meta.description}
          </Typography>
        </Container>
      </Box>

      {/* Grid */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.purpleGhost }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {products.map((product, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CTASection />
    </>
  );
}
