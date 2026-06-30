"use client";
import { Box, Container, Grid, Typography, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/testimonials";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { BRAND } from "@/lib/theme";

export default function TestimonialsSection({ limit = 4 }: { limit?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.purpleGhost }} ref={ref}>
      <Container maxWidth="lg">
        <SectionLabel
          eyebrow="Stories"
          title="Memories That Made Them Smile"
          subtitle="Hear from families and couples who trusted us with their most treasured moments."
        />
        <Grid container spacing={3}>
          {testimonials.slice(0, limit).map((t, i) => (
            <Grid item xs={12} sm={6} md={3} key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box sx={{
                  p:               3.5,
                  backgroundColor: "#FDFBFF",
                  border:          `1px solid rgba(91,45,142,0.1)`,
                  height:          "100%",
                  display:         "flex",
                  flexDirection:   "column",
                  transition:      "all 0.35s",
                  "&:hover": {
                    boxShadow:   `0 14px 44px rgba(91,45,142,0.1)`,
                    transform:   "translateY(-4px)",
                    borderColor: BRAND.purple,
                  },
                }}>
                  <FormatQuoteIcon sx={{ color: BRAND.purple, fontSize: 28, opacity: 0.25, mb: 1 }} />
                  <Typography sx={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                    fontSize:   "0.97rem", color: BRAND.charcoal, lineHeight: 1.85,
                    flex:       1, mb: 3,
                  }}>
                    "{t.text.length > 180 ? t.text.slice(0, 180) + "…" : t.text}"
                  </Typography>
                  <Box>
                    <Rating value={t.rating} readOnly size="small" sx={{ color: BRAND.gold, mb: 1.5 }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Avatar src={t.image} alt={t.name} sx={{ width: 38, height: 38, border: `2px solid ${BRAND.purplePale}` }} />
                      <Box>
                        <Typography sx={{
                          fontFamily: "'Jost', sans-serif", fontWeight: 500,
                          fontSize:   "0.83rem", color: BRAND.charcoal,
                        }}>
                          {t.name}
                        </Typography>
                        <Typography sx={{
                          fontFamily: "'Jost', sans-serif", fontWeight: 300,
                          fontSize:   "0.7rem", color: BRAND.purple, letterSpacing: "0.04em",
                        }}>
                          {t.location} · {t.product}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
