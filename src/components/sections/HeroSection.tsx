"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BRAND } from "@/lib/theme";

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80",
];

export default function HeroSection() {
  return (
    <Box sx={{
      position:        "relative",
      minHeight:       "100vh",
      display:         "flex",
      alignItems:      "center",
      overflow:        "hidden",
      backgroundColor: BRAND.charcoal,
    }}>
      {/* Photo mosaic bg */}
      <Box sx={{
        position: "absolute", inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows:    "repeat(2, 1fr)",
        opacity: 0.35,
      }}>
        {heroImages.map((src, i) => (
          <Box key={i} sx={{ overflow: "hidden", position: "relative" }}>
            <Box component="img" src={src} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Box>
        ))}
      </Box>

      {/* Purple-tinted gradient overlay */}
      <Box sx={{
        position: "absolute", inset: 0,
        background: `linear-gradient(
          135deg,
          rgba(30,20,40,0.92) 0%,
          rgba(61,29,99,0.82) 45%,
          rgba(30,20,40,0.9)  100%
        )`,
      }} />

      {/* Gold accent top bar */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)`,
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 16, md: 8 } }}>
        <Box sx={{ maxWidth: 720 }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
              <Typography sx={{
                fontFamily:    "'Jost', sans-serif", fontWeight: 500,
                letterSpacing: "0.24em", textTransform: "uppercase",
                fontSize: "0.7rem", color: BRAND.gold,
              }}>
                Paperboat Gifts &amp; Forever Moments — Chennai
              </Typography>
            </Box>
          </motion.div>

          {/* H1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.35 }}>
            <Typography variant="h1" sx={{
              fontSize:  { xs: "2.6rem", sm: "3.4rem", md: "4.4rem", lg: "5rem" },
              color:     "#FDFBFF",
              mb:        3,
              lineHeight: 1.08,
            }}>
              Preserve Your Most{" "}
              <Box component="span" sx={{
                color:      BRAND.gold,
                fontStyle:  "italic",
                textShadow: `0 0 60px rgba(245,200,66,0.25)`,
              }}>
                Beautiful
              </Box>
              <br />Memories Forever
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <Typography sx={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize:   { xs: "1.1rem", md: "1.35rem" },
              color:      "rgba(253,251,255,0.75)", mb: 5, lineHeight: 1.75, maxWidth: 560,
            }}>
              We transform your cherished photographs into timeless keepsakes — handcrafted frames, polaroids, albums &amp; personalized gifts made with love.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.65 }}>
            <Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap" }}>
              <Link href="/products" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{
                  backgroundColor: BRAND.purple,
                  color:           "#FDFBFF",
                  px: 5, py: 2, fontSize: "0.76rem", letterSpacing: "0.18em",
                  boxShadow: `0 8px 32px rgba(91,45,142,0.5)`,
                  "&:hover": {
                    backgroundColor: BRAND.purpleDark,
                    transform: "translateY(-2px)",
                    boxShadow: `0 14px 40px rgba(91,45,142,0.6)`,
                  },
                }}>
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button variant="outlined" sx={{
                  borderColor: `rgba(245,200,66,0.6)`,
                  color:       BRAND.gold,
                  px: 5, py: 2, fontSize: "0.76rem", letterSpacing: "0.18em",
                  "&:hover": {
                    borderColor:     BRAND.gold,
                    backgroundColor: "rgba(245,200,66,0.08)",
                    transform:       "translateY(-2px)",
                  },
                }}>
                  Contact Us
                </Button>
              </Link>
            </Box>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <Box sx={{
              display:   "flex",
              gap:       { xs: 4, md: 6 },
              mt:        8,
              flexWrap:  "wrap",
              pt:        5,
              borderTop: `1px solid rgba(245,200,66,0.15)`,
            }}>
              {[
                ["500+",   "Frames Crafted"],
                ["200+",   "Happy Families"],
                ["5 ★",    "Average Rating"],
                ["5 Days", "Avg. Delivery"],
              ].map(([num, label]) => (
                <Box key={label}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize:   { xs: "1.5rem", md: "1.9rem" },
                    fontWeight: 700,
                    color:      BRAND.gold,
                    lineHeight: 1,
                  }}>
                    {num}
                  </Typography>
                  <Typography sx={{
                    fontFamily:    "'Jost', sans-serif", fontWeight: 300,
                    fontSize:      "0.68rem", letterSpacing: "0.12em",
                    color:         "rgba(253,251,255,0.45)", mt: 0.6,
                    textTransform: "uppercase",
                  }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll cue */}
      <motion.div
        style={{ position: "absolute", bottom: 28, left: "50%", translateX: "-50%", zIndex: 2 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          sx={{
            display:       "flex",
            flexDirection: "column",
            alignItems:    "center",
            gap:           0.5,
            cursor:        "pointer",
            transform:     "translateX(-50%)",
          }}
        >
          <Typography sx={{
            fontFamily:    "'Jost', sans-serif",
            fontSize:      "0.6rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(253,251,255,0.35)",
          }}>
            Scroll
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: BRAND.gold, fontSize: 20 }} />
        </Box>
      </motion.div>
    </Box>
  );
}
