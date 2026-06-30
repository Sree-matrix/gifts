"use client";
import { Box, Container, Grid, Typography, Button, Chip, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckIcon from "@mui/icons-material/Check";
import type { Product } from "@/lib/products";
import { BRAND } from "@/lib/theme";

interface Props {
  product: Product;
  wa: string;
  waMsg: string;
}

export default function ProductDetailView({ product, wa, waMsg }: Props) {
  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: { xs: 8, md: 12 }, backgroundColor: BRAND.purpleGhost }}>
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 5 }}>
          {[
            { label: "Home",       href: "/" },
            { label: "Products",   href: "/products" },
            { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/products/${product.category}` },
          ].map((b, i, arr) => (
            <Box key={b.href} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Link href={b.href} style={{ textDecoration: "none" }}>
                <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: BRAND.purple, fontWeight: 400, "&:hover": { color: BRAND.gold } }}>
                  {b.label}
                </Typography>
              </Link>
              {i < arr.length - 1 && <Typography sx={{ color: BRAND.grey, fontSize: "0.7rem" }}>/</Typography>}
            </Box>
          ))}
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: BRAND.grey }}>/ {product.name}</Typography>
        </Box>

        <Grid container spacing={{ xs: 5, md: 8 }}>
          {/* Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", border: `1px solid rgba(91,45,142,0.1)` }}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
              {product.badge && (
                <Chip label={product.badge} sx={{ position: "absolute", top: 16, left: 16, backgroundColor: BRAND.purple, color: "#FDFBFF" }} />
              )}
            </Box>
            {product.images.length > 1 && (
              <Box sx={{ display: "flex", gap: 1.5, mt: 1.5 }}>
                {product.images.map((img, i) => (
                  <Box key={i} sx={{ width: 80, height: 60, position: "relative", overflow: "hidden", border: `1px solid rgba(91,45,142,0.15)`, flexShrink: 0, cursor: "pointer", "&:hover": { borderColor: BRAND.purple } }}>
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill style={{ objectFit: "cover" }} />
                  </Box>
                ))}
              </Box>
            )}
          </Grid>

          {/* Details */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.65rem", color: BRAND.purpleLight, mb: 1.5 }}>
              {product.category}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: BRAND.charcoal, mb: 2, lineHeight: 1.2 }}>
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, mb: 3 }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: BRAND.purple }}>
                {product.priceLabel}
              </Typography>
              <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: BRAND.gold, fontWeight: 500 }}>
                onwards
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.93rem", color: BRAND.grey, lineHeight: 1.9, mb: 4 }}>
              {product.description}
            </Typography>

            <Divider sx={{ mb: 4, borderColor: "rgba(91,45,142,0.1)" }} />

            {/* Features */}
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600, color: BRAND.charcoal, mb: 2 }}>
              What's Included
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 4 }}>
              {product.features.map((f) => (
                <Box key={f} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <CheckIcon sx={{ color: BRAND.purple, fontSize: 16, mt: 0.3, flexShrink: 0 }} />
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.87rem", color: BRAND.charcoal }}>
                    {f}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Sizes */}
            {product.sizes && (
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.charcoal, mb: 1.5 }}>
                  Available Sizes
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {product.sizes.map((s) => (
                    <Box key={s} sx={{ px: 2, py: 0.8, border: `1px solid rgba(91,45,142,0.25)`, cursor: "pointer", "&:hover": { borderColor: BRAND.purple, backgroundColor: BRAND.purplePale }, transition: "all 0.2s" }}>
                      <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: BRAND.charcoal }}>
                        {s}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* CTAs */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link href={`https://wa.me/${wa}?text=${waMsg}`} target="_blank" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" startIcon={<WhatsAppIcon />} sx={{
                  backgroundColor: "#25D366", color: "#fff", py: 2, fontSize: "0.78rem", letterSpacing: "0.12em",
                  "&:hover": { backgroundColor: "#1DB954", boxShadow: "0 8px 28px rgba(37,211,102,0.4)" },
                }}>
                  Order via WhatsApp
                </Button>
              </Link>
              <Link href="/order" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{
                  borderColor: BRAND.purple, color: BRAND.purple, py: 2, fontSize: "0.78rem", letterSpacing: "0.12em",
                  "&:hover": { backgroundColor: BRAND.purplePale, borderColor: BRAND.purple },
                }}>
                  Place a Custom Order
                </Button>
              </Link>
            </Box>

            {/* Trust note */}
            <Box sx={{ mt: 3, p: 2.5, backgroundColor: BRAND.purplePale, border: `1px solid rgba(91,45,142,0.12)` }}>
              <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: BRAND.purple, textAlign: "center", lineHeight: 1.7 }}>
                🎁 Every order is gift-packed &nbsp;•&nbsp; 🚀 3–5 day delivery &nbsp;•&nbsp; ✅ Quality guaranteed
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
