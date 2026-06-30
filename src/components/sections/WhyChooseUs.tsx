"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionLabel from "@/components/ui/SectionLabel";
import { BRAND } from "@/lib/theme";

const features = [
  { emoji: "💎", title: "Premium Materials",     desc: "Every frame is made with the finest wood, glass, and finishing materials sourced for longevity and beauty." },
  { emoji: "✋", title: "Handmade Finishing",    desc: "Each piece is hand-assembled and quality-checked by our artisans before it reaches your door." },
  { emoji: "🚀", title: "Fast Delivery",          desc: "Most orders are ready within 3–5 business days, carefully packed and dispatched across India." },
  { emoji: "👨‍👩‍👧", title: "Trusted by Families", desc: "Over 500 families have chosen us to preserve their most precious memories." },
  { emoji: "🎨", title: "Fully Customized",       desc: "Every product is uniquely personalized — from engraved names to bespoke sizes and curated designs." },
  { emoji: "💬", title: "WhatsApp Support",       desc: "Our team guides you through every step on WhatsApp — from selection to doorstep delivery." },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.purpleGhost }} ref={ref}>
      <Container maxWidth="lg">
        <SectionLabel
          eyebrow="Why Paper Boat"
          title="Crafted with Intention, Delivered with Love"
          subtitle="We believe photographs deserve more than digital storage — they deserve to be displayed, touched, and passed down through generations."
        />
        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
              >
                <Box sx={{
                  p:           3.5,
                  height:      "100%",
                  border:      `1px solid rgba(91,45,142,0.1)`,
                  backgroundColor: "#FDFBFF",
                  transition:  "all 0.35s ease",
                  "&:hover": {
                    borderColor: BRAND.purple,
                    boxShadow:   `0 12px 40px rgba(91,45,142,0.1)`,
                    transform:   "translateY(-5px)",
                    "& .icon-box": {
                      backgroundColor: BRAND.purple,
                      "& .emoji": { filter: "brightness(0) invert(1)" },
                    },
                  },
                }}>
                  <Box className="icon-box" sx={{
                    width: 56, height: 56,
                    border:          `1px solid rgba(91,45,142,0.2)`,
                    backgroundColor: BRAND.purplePale,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    mb: 3, transition: "all 0.3s",
                  }}>
                    <Typography className="emoji" sx={{ fontSize: "1.5rem", transition: "filter 0.3s" }}>
                      {f.emoji}
                    </Typography>
                  </Box>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize:   "1.05rem", fontWeight: 600,
                    color:      BRAND.charcoal, mb: 1.5,
                  }}>
                    {f.title}
                  </Typography>
                  <Typography sx={{
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    fontSize:   "0.87rem", color: BRAND.grey, lineHeight: 1.85,
                  }}>
                    {f.desc}
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
