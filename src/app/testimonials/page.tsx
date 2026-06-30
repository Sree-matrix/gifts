import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Avatar, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { testimonials } from "@/lib/testimonials";
import { BRAND } from "@/lib/theme";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Customer Stories",
  description: "Read heartfelt reviews from families and couples who trusted Paperboat Gifts to preserve their most cherished memories.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Box sx={{ pt: 14, pb: 10, background: `linear-gradient(145deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`, position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 2 }}>
            Customer Stories
          </Typography>
          <Typography variant="h1" sx={{ color: "#FDFBFF", fontSize: { xs: "2.4rem", md: "3.8rem" }, mb: 3 }}>
            Memories That Made Them Smile
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(253,251,255,0.68)", fontSize: { xs: "1.1rem", md: "1.3rem" } }}>
            Real stories from families, couples and friends across India.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.purpleGhost }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {testimonials.map((t) => (
              <Grid item xs={12} sm={6} md={4} key={t.id}>
                <Box sx={{
                  p: 4, backgroundColor: "#FDFBFF",
                  border: `1px solid rgba(91,45,142,0.1)`,
                  height: "100%", display: "flex", flexDirection: "column",
                  transition: "all 0.35s",
                  "&:hover": { borderColor: BRAND.purple, boxShadow: `0 14px 44px rgba(91,45,142,0.1)`, transform: "translateY(-4px)" },
                }}>
                  <FormatQuoteIcon sx={{ color: BRAND.purple, fontSize: 32, opacity: 0.2, mb: 1.5 }} />
                  <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: BRAND.charcoal, lineHeight: 1.85, flex: 1, mb: 3 }}>
                    "{t.text}"
                  </Typography>
                  <Box>
                    <Rating value={t.rating} readOnly size="small" sx={{ color: BRAND.gold, mb: 1.5 }} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Avatar src={t.image} alt={t.name} sx={{ width: 42, height: 42, border: `2px solid ${BRAND.purplePale}` }} />
                      <Box>
                        <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.85rem", color: BRAND.charcoal }}>{t.name}</Typography>
                        <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: BRAND.purple }}>{t.location}</Typography>
                        <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.68rem", color: BRAND.gold }}>{t.product} · {t.date}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <CTASection />
    </>
  );
}
