"use client";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/theme";

const categories = [
  {
    label: "Photo Frames",
    href: "/products/frames",
    count: "30+ styles",
    img: "wedding/wedding-frame-1.jpg",
  },
  {
    label: "Polaroids",
    href: "/products/polaroids",
    count: "5 collections",
    img: "poloroids/poloroids-2.jpg",
  },
  {
    label: "Photo Albums",
    href: "/products/albums",
    count: "5 styles",
    img: "/photoalbum/photo-album-1.jpg",
  },
  {
    label: "Photo Cards",
    href: "/products/miniatures",
    count: "4 types",
    img: "/photocards/cards-2.jpg",
  },
  {
    label: "Fridge Magnets",
    href: "/products/magnets",
    count: "4 styles",
    img: "https://images.unsplash.com/photo-1499516085052-ad52a2af0c30?w=600&q=80",
  },
];

export default function CategoryStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FDFBFF" }} ref={ref}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 6,
            justifyContent: "center",
          }}
        >
          <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontSize: "0.68rem",
              color: BRAND.gold,
            }}
          >
            Shop by Category
          </Typography>
          <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: { xs: "auto", md: "visible" },
            pb: { xs: 2, md: 0 },
            "&::-webkit-scrollbar": { height: 3 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(91,45,142,0.3)`,
            },
          }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                flex: "0 0 auto",
                width: "calc(20% - 7px)",
                minWidth: 155,
              }}
            >
              <Link href={cat.href} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    "&:hover": {
                      "& .cat-img": { transform: "scale(1.07)" },
                      "& .cat-overlay": { opacity: 0.82 },
                      "& .cat-border": { opacity: 1, transform: "scale(0.93)" },
                    },
                  }}
                >
                  <Box
                    className="cat-img"
                    component="img"
                    src={cat.img}
                    alt={cat.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.55s ease",
                    }}
                  />
                  <Box
                    className="cat-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to top, rgba(61,29,99,0.88) 0%, rgba(61,29,99,0.25) 60%, transparent 100%)`,
                      opacity: 0.7,
                      transition: "opacity 0.35s",
                    }}
                  />
                  {/* Hover border */}
                  <Box
                    className="cat-border"
                    sx={{
                      position: "absolute",
                      inset: 8,
                      border: `1px solid rgba(245,200,66,0.6)`,
                      opacity: 0,
                      transition: "all 0.35s",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2.5,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#FDFBFF",
                        lineHeight: 1.3,
                        mb: 0.5,
                      }}
                    >
                      {cat.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.68rem",
                        color: BRAND.gold,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {cat.count}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
