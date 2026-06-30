import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import { BRAND } from "@/lib/theme";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse our complete range of premium photo frames, polaroid prints, albums, miniatures and fridge magnets. Handcrafted in Chennai.",
};

const categories = [
  { label: "Photo Frames",   slug: "frames",    desc: "30+ styles from classic wood to LED and digital", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&q=80", count: "30+ Products" },
  { label: "Polaroid Prints", slug: "polaroids", desc: "Vintage-style prints from your digital photos",    img: "https://images.unsplash.com/photo-1526566661780-1a67ea3c863e?w=900&q=80", count: "5 Collections" },
  { label: "Photo Albums",   slug: "albums",    desc: "Heirloom-quality albums and luxury photo books",   img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80", count: "5 Styles" },
  { label: "Miniatures",     slug: "miniatures", desc: "Hand-illustrated caricature miniatures",          img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80", count: "4 Types" },
  { label: "Fridge Magnets", slug: "magnets",   desc: "Custom photo magnets in multiple shapes",         img: "https://images.unsplash.com/photo-1499516085052-ad52a2af0c30?w=900&q=80", count: "4 Styles" },
];

export default function ProductsPage() {
  return (
    <>
      <Box sx={{ pt: 14, pb: 10, background: `linear-gradient(145deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`, position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 2 }}>
            Our Collection
          </Typography>
          <Typography variant="h1" sx={{ color: "#FDFBFF", fontSize: { xs: "2.4rem", md: "3.8rem" }, mb: 3 }}>
            All Products
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(253,251,255,0.68)", fontSize: { xs: "1.1rem", md: "1.3rem" } }}>
            Every product is handcrafted and fully personalized — just for you.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.purpleGhost }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {categories.map((cat) => (
              <Grid item xs={12} sm={6} md={4} key={cat.slug}>
                <Link href={`/products/${cat.slug}`} style={{ textDecoration: "none" }}>
                  <Box sx={{
                    position: "relative", overflow: "hidden",
                    border: `1px solid rgba(91,45,142,0.1)`,
                    transition: "all 0.4s",
                    "&:hover": {
                      borderColor: BRAND.purple,
                      boxShadow: `0 16px 52px rgba(91,45,142,0.14)`,
                      transform: "translateY(-5px)",
                      "& .c-img": { transform: "scale(1.05)" },
                      "& .c-overlay": { opacity: 0.88 },
                    },
                  }}>
                    <Box sx={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                      <Box className="c-img" component="img" src={cat.img} alt={cat.label} sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.55s" }} />
                      <Box className="c-overlay" sx={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(61,29,99,0.9) 0%, rgba(61,29,99,0.2) 100%)`, opacity: 0.75, transition: "opacity 0.35s" }} />
                      <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                        <Box sx={{ backgroundColor: BRAND.gold, color: BRAND.charcoal, px: 2, py: 0.6, fontSize: "0.65rem", fontFamily: "'Jost', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>
                          {cat.count}
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3, backgroundColor: "#FDFBFF" }}>
                      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: BRAND.charcoal, mb: 1 }}>
                        {cat.label}
                      </Typography>
                      <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.84rem", color: BRAND.grey }}>
                        {cat.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <CTASection />
    </>
  );
}
