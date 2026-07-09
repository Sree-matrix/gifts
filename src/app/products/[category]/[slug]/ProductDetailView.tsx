"use client";
import { useState } from "react";
import { Box, Container, Grid, Typography, Button, Chip, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import toast from "react-hot-toast";
import type { Product } from "@/lib/products";
import { BRAND } from "@/lib/theme";

interface Props {
  product: Product;
}

// Downscale + convert an image file to a base64 data URL (falls back to raw read for HEIC etc.)
async function fileToDataUrl(file: File, maxDim = 1400, quality = 0.82): Promise<string> {
  const readRaw = () =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("read failed"));
      reader.readAsDataURL(file);
    });

  try {
    const url = URL.createObjectURL(file);
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width >= height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no ctx"));
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("bad image"));
      };
      img.src = url;
    });
    return dataUrl;
  } catch {
    return readRaw();
  }
}

export default function ProductDetailView({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUploadedFiles(Array.from(e.target.files));
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one photo.");
      return;
    }
    setIsSubmitting(true);
    try {
      const images = await Promise.all(uploadedFiles.map((f) => fileToDataUrl(f)));
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          category: product.category,
          priceLabel: product.priceLabel,
          size: selectedSize,
          images,
        }),
      });
      if (!res.ok) throw new Error("Request failed");

      toast.success("Order placed! We'll be in touch soon. 🎉");
      setSelectedSize("");
      setUploadedFiles([]);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              What&apos;s Included
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

            {/* Order form — size + photo only */}
            <Box sx={{ backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.12)`, p: { xs: 2.5, md: 3.5 } }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: BRAND.charcoal, mb: 2.5 }}>
                Order This Piece
              </Typography>

              {/* Sizes */}
              {product.sizes && (
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.charcoal, mb: 1.5 }}>
                    Select Size
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {product.sizes.map((s) => {
                      const active = selectedSize === s;
                      return (
                        <Box
                          key={s}
                          onClick={() => setSelectedSize(active ? "" : s)}
                          sx={{
                            px: 2, py: 0.8, cursor: "pointer", transition: "all 0.2s",
                            border: `1px solid ${active ? BRAND.purple : "rgba(91,45,142,0.25)"}`,
                            backgroundColor: active ? BRAND.purple : "transparent",
                            "&:hover": { borderColor: BRAND.purple, backgroundColor: active ? BRAND.purple : BRAND.purplePale },
                          }}
                        >
                          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: active ? "#FDFBFF" : BRAND.charcoal }}>
                            {s}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              )}

              {/* Photo upload */}
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.charcoal, mb: 1.5 }}>
                  Upload Your Photo
                </Typography>
                <Box
                  component="label"
                  htmlFor="detail-photo-upload"
                  sx={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    border: `2px dashed rgba(91,45,142,0.25)`, p: 3.5, cursor: "pointer", transition: "all 0.2s",
                    "&:hover": { borderColor: BRAND.purple, backgroundColor: BRAND.purplePale },
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: 34, color: BRAND.purple, mb: 1, opacity: 0.6 }} />
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: BRAND.purple }}>
                    Click to upload your photo(s)
                  </Typography>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: BRAND.grey, mt: 0.5 }}>
                    JPG, PNG, HEIC — high-res works best
                  </Typography>
                  {uploadedFiles.length > 0 && (
                    <Box sx={{ mt: 1.5, px: 1.5, py: 1, backgroundColor: BRAND.purplePale }}>
                      <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: BRAND.purple, fontWeight: 500 }}>
                        ✅ {uploadedFiles.length} file{uploadedFiles.length > 1 ? "s" : ""} selected
                      </Typography>
                    </Box>
                  )}
                  <input id="detail-photo-upload" type="file" accept="image/*" multiple hidden onChange={handleFileChange} />
                </Box>
              </Box>

              {/* CTAs */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button onClick={handleSubmit} fullWidth variant="contained" disabled={isSubmitting} startIcon={<SendIcon />} sx={{
                  backgroundColor: BRAND.purple, color: "#FDFBFF", py: 2, fontSize: "0.78rem", letterSpacing: "0.12em",
                  "&:hover": { backgroundColor: BRAND.purpleDark, boxShadow: "0 8px 28px rgba(91,45,142,0.4)" },
                  "&:disabled": { backgroundColor: "rgba(91,45,142,0.4)", color: "#FDFBFF" },
                }}>
                  {isSubmitting ? "Placing Order…" : "Place Order"}
                </Button>
                <Link href="/order" style={{ textDecoration: "none" }}>
                  <Button fullWidth variant="outlined" startIcon={<ShoppingBagOutlinedIcon />} sx={{
                    borderColor: BRAND.purple, color: BRAND.purple, py: 2, fontSize: "0.78rem", letterSpacing: "0.12em",
                    "&:hover": { backgroundColor: BRAND.purplePale, borderColor: BRAND.purple },
                  }}>
                    Place a Custom Order
                  </Button>
                </Link>
              </Box>
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
