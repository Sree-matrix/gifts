"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Product } from "@/lib/products";
import { BRAND } from "@/lib/theme";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.35) }}
      style={{ height: "100%" }}
    >
      <Link href={`/products/${product.category}/${product.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <Box sx={{
        backgroundColor: "#FDFBFF",
        border:    `1px solid rgba(91,45,142,0.1)`,
        height:    "100%",
        display:   "flex",
        flexDirection: "column",
        overflow:  "hidden",
        cursor:    "pointer",
        transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        "&:hover": {
          boxShadow:   `0 16px 52px rgba(91,45,142,0.12)`,
          transform:   "translateY(-6px)",
          borderColor: BRAND.purple,
          "& .p-img": { transform: "scale(1.05)" },
          "& .p-actions": { opacity: 1, transform: "translateY(0)" },
        },
      }}>
        {/* Image */}
        <Box sx={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
            className="p-img"
            style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
          />
          {/* Badges */}
          <Box sx={{ position: "absolute", top: 12, left: 12, display: "flex", flexDirection: "column", gap: 0.8 }}>
            {product.badge && (
              <Chip label={product.badge} size="small" sx={{ backgroundColor: BRAND.purple, color: "#FDFBFF", height: 22 }} />
            )}
            {product.new && !product.badge && (
              <Chip label="New" size="small" sx={{ backgroundColor: BRAND.gold, color: BRAND.charcoal, height: 22, fontWeight: 600 }} />
            )}
          </Box>
          {/* Hover hint */}
          <Box className="p-actions" sx={{
            position:  "absolute", bottom: 0, left: 0, right: 0,
            opacity: 0, transform: "translateY(6px)",
            transition: "all 0.3s ease",
            p: 1.5,
          }}>
            <Box sx={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 0.8,
              backgroundColor: "rgba(253,251,255,0.96)",
              color:           BRAND.purple,
              py: 1.4,
              fontFamily:      "'Jost', sans-serif",
              fontSize:        "0.7rem", letterSpacing: "0.12em",
              textTransform:   "uppercase", fontWeight: 500,
            }}>
              View Details
              <ArrowForwardIcon sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ p: 2.8, flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography sx={{
            fontFamily:    "'Jost', sans-serif", fontSize: "0.62rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color:         BRAND.purpleLight, mb: 0.8, fontWeight: 500,
          }}>
            {product.category.replace("magnets", "fridge magnets")}
          </Typography>
          <Typography sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "1.02rem", fontWeight: 600,
            color:      BRAND.charcoal, mb: 1, lineHeight: 1.3,
          }}>
            {product.name}
          </Typography>
          <Typography sx={{
            fontFamily:  "'Jost', sans-serif", fontWeight: 300,
            fontSize:    "0.82rem", color: BRAND.grey, mb: 2.5,
            display:     "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.75,
            flex: 1,
          }}>
            {product.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <Typography sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize:   "1.18rem", fontWeight: 700, color: BRAND.purple,
            }}>
              {product.priceLabel}
            </Typography>
            <Typography sx={{
              fontFamily:    "'Jost', sans-serif", fontSize: "0.68rem",
              color:         BRAND.gold, letterSpacing: "0.06em", fontWeight: 500,
            }}>
              onwards
            </Typography>
          </Box>
        </Box>
      </Box>
      </Link>
    </motion.div>
  );
}
