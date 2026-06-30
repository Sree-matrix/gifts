import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "@/components/products/ProductCard";
import CTASection from "@/components/sections/CTASection";
import { getProductsByCategory } from "@/lib/products";
import { BRAND } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Photo Frames",
  description: "30+ premium handcrafted photo frames — wooden, LED, floating, acrylic, wedding collage and more. Custom sizes. Ships across India.",
};

export default function FramesPage() {
  const frames = getProductsByCategory("frames");
  return (
    <>
      <Box sx={{ pt: 16, pb: 10, background: `linear-gradient(135deg, ${BRAND.purpleBlack}, ${BRAND.purpleDark})`, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Box sx={{ position: "absolute", right: -20, top: "30%", fontFamily: "'Playfair Display', serif", fontSize: "22rem", fontWeight: 700, color: "rgba(245,200,66,0.03)", lineHeight: 1, userSelect: "none" }}>🖼</Box>
        <Container maxWidth="lg" sx={{ position: "relative", textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: BRAND.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.85rem", mb: 2 }}>
            Our Collection
          </Typography>
          <Typography variant="h1" sx={{ color: "#fff", fontSize: { xs: "2.4rem", md: "3.8rem" }, mb: 2 }}>
            Photo{" "}<Box component="span" sx={{ color: BRAND.gold, fontStyle: "italic" }}>Frames</Box>
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,255,255,0.65)", fontSize: { xs: "1.05rem", md: "1.2rem" } }}>
            {frames.length}+ premium styles — wooden, LED, floating, acrylic, collage & more
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: BRAND.softWhite }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {frames.map((p, i) => (
              <Grid item xs={12} sm={6} md={3} key={p.id}>
                <ProductCard product={p} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <CTASection />
    </>
  );
}
