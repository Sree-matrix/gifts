"use client";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/theme";

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  return (
    <Box
      ref={ref}
      sx={{
        py:         { xs: 12, md: 20 },
        position:   "relative",
        overflow:   "hidden",
        background: `linear-gradient(145deg, ${BRAND.purpleDark} 0%, ${BRAND.purple} 55%, ${BRAND.purpleDark} 100%)`,
      }}
    >
      {/* Subtle photo bg */}
      <Box sx={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')",
        backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06,
      }} />

      {/* Gold accent lines */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />

      {/* Corner decorations */}
      <Box sx={{ position: "absolute", top: 32, left: 32, width: 60, height: 60, border: `1px solid rgba(245,200,66,0.25)`, display: { xs: "none", md: "block" } }} />
      <Box sx={{ position: "absolute", bottom: 32, right: 32, width: 60, height: 60, border: `1px solid rgba(245,200,66,0.25)`, display: { xs: "none", md: "block" } }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mb: 3 }}>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
            <Typography sx={{
              fontFamily: "'Jost', sans-serif", fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              fontSize: "0.68rem", color: BRAND.gold,
            }}>
              Start Today
            </Typography>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
          </Box>

          <Typography variant="h2" sx={{
            color:      "#FDFBFF",
            fontSize:   { xs: "2.4rem", md: "3.8rem" },
            mb:         3,
            lineHeight: 1.15,
          }}>
            Turn Your Memories<br />Into{" "}
            <Box component="span" sx={{ color: BRAND.gold, fontStyle: "italic" }}>Art</Box>
          </Typography>

          <Typography sx={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            color:      "rgba(253,251,255,0.72)",
            fontSize:   { xs: "1.1rem", md: "1.3rem" },
            mb:         7, lineHeight: 1.75,
          }}>
            Every photograph tells a story. Let us help you tell it beautifully, permanently, and with the craftsmanship it deserves.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/order" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{
                backgroundColor: BRAND.gold,
                color:           BRAND.charcoal,
                px: 6, py: 2.2, fontSize: "0.76rem", letterSpacing: "0.18em",
                fontWeight: 600,
                boxShadow: `0 8px 32px rgba(245,200,66,0.4)`,
                "&:hover": {
                  backgroundColor: BRAND.goldDark,
                  transform:       "translateY(-2px)",
                  boxShadow:       `0 14px 40px rgba(245,200,66,0.5)`,
                },
              }}>
                Order Your Frame
              </Button>
            </Link>
            <Link href={`https://wa.me/${wa}`} target="_blank" style={{ textDecoration: "none" }}>
              <Button variant="outlined" sx={{
                borderColor: "rgba(253,251,255,0.4)",
                color:       "#FDFBFF",
                px: 6, py: 2.2, fontSize: "0.76rem", letterSpacing: "0.18em",
                "&:hover": {
                  borderColor:     "rgba(253,251,255,0.8)",
                  backgroundColor: "rgba(253,251,255,0.08)",
                  transform:       "translateY(-2px)",
                },
              }}>
                WhatsApp Us
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
