"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionLabel from "@/components/ui/SectionLabel";
import { BRAND } from "@/lib/theme";

const steps = [
  { emoji: "📤", step: "01", title: "Upload Your Photos",   desc: "Share your favourite photographs via WhatsApp or our order form. High-resolution images always produce the best results." },
  { emoji: "🎨", step: "02", title: "Customize Your Order", desc: "Tell us your preferred size, material, and text. We'll send you a digital preview before we begin crafting." },
  { emoji: "🛠️", step: "03", title: "We Craft with Care",   desc: "Our artisans handcraft each piece using premium materials. Every order is quality-checked before packaging." },
  { emoji: "📦", step: "04", title: "Delivered to Your Door", desc: "Your keepsake arrives beautifully gift-wrapped within 3–5 days, ready to delight." },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      ref={ref}
      sx={{
        py:         { xs: 10, md: 16 },
        position:   "relative",
        overflow:   "hidden",
        background: `linear-gradient(160deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`,
      }}
    >
      {/* Top gold accent */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />

      {/* Purple glow bg */}
      <Box sx={{ position: "absolute", top: "50%", left: "50%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(91,45,142,0.18) 0%, transparent 70%)`, transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <SectionLabel eyebrow="How It Works" title="Simple. Personal. Perfect." subtitle="Four easy steps between you and a memory that lasts forever." light />

        <Grid container spacing={4}>
          {steps.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={s.step}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.14 }}
              >
                <Box sx={{ textAlign: "center", px: 1 }}>
                  {/* Icon */}
                  <Box sx={{
                    position: "relative", display: "inline-flex",
                    alignItems: "center", justifyContent: "center", mb: 3,
                  }}>
                    <Box sx={{
                      width: 80, height: 80,
                      border:          `1px solid rgba(245,200,66,0.3)`,
                      backgroundColor: "rgba(91,45,142,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Typography sx={{ fontSize: "2rem" }}>{s.emoji}</Typography>
                    </Box>
                    <Typography sx={{
                      position:   "absolute",
                      top: -12, right: -12,
                      fontFamily: "'Playfair Display', serif",
                      fontSize:   "0.7rem", fontWeight: 700,
                      color:      `rgba(245,200,66,0.45)`,
                      letterSpacing: "0.04em",
                    }}>
                      {s.step}
                    </Typography>
                  </Box>

                  <Typography sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize:   "1.05rem", fontWeight: 600,
                    color:      "#FDFBFF", mb: 1.5,
                  }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    fontSize:   "0.84rem",
                    color:      "rgba(253,251,255,0.58)",
                    lineHeight: 1.9,
                  }}>
                    {s.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
