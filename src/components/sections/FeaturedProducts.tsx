"use client";
import { Box, Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { BRAND } from "@/lib/theme";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: "#FDFCFF" }}>
      <Container maxWidth="lg">
        <SectionLabel eyebrow="Our Collection" title="Gifts That Speak From the Heart" subtitle="From classic wooden frames to personalized miniatures — discover our full range of handcrafted memory gifts." />
        <Grid container spacing={3}>
          {featured.map((product, i) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} index={i} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Link href="/products" style={{ textDecoration: "none" }}>
            <Button variant="outlined" sx={{
              borderColor: BRAND.purple, color: BRAND.purple,
              px: 7, py: 2, fontSize: "0.76rem", letterSpacing: "0.15em",
              "&:hover": { backgroundColor: BRAND.purple, color: "#fff", borderColor: BRAND.purple, boxShadow: `0 8px 24px rgba(75,45,143,0.3)` },
            }}>
              View All Products
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
