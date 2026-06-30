import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { BRAND } from "@/lib/theme";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story behind Paperboat Gifts & Forever Moments — born from a photographer's passion for preserving memories.",
};

const values = [
  { n: "01", title: "Quality",            desc: "We never compromise on materials, finish, or craftsmanship. Every frame passes a rigorous quality check before leaving our studio." },
  { n: "02", title: "Trust",              desc: "Your photographs are precious. We treat every image with utmost care and confidentiality — your memories are completely safe with us." },
  { n: "03", title: "Creativity",         desc: "We don't believe in cookie-cutter designs. Every order is approached with fresh eyes and a commitment to making it uniquely yours." },
  { n: "04", title: "Customer Happiness", desc: "We measure success by your smile when you unbox. We won't rest until you're completely, genuinely delighted." },
];

const timeline = [
  { year: "2024", event: "Paperboat Gifts & Forever Moments founded in Chennai, born from a photographer's desire to bring memories off screens and onto walls." },
  { year: "2024", event: "First 50 orders fulfilled — primarily wedding frames and polaroid sets for local families and couples." },
  { year: "2025", event: "Expanded to miniatures, shadow boxes, LED frames, digital frames, and canvas wraps." },
  { year: "2025", event: "Reached 200+ happy families across Tamil Nadu and began pan-India shipping." },
  { year: "2025", event: "Launched the Star Map Frame and Fingerprint Tree Frame collections to wide acclaim." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <Box sx={{ pt: 16, pb: 12, background: `linear-gradient(135deg, ${BRAND.purpleBlack} 0%, ${BRAND.purpleDark} 100%)`, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.07 }} />
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Box sx={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", fontFamily: "'Playfair Display', serif", fontSize: "28rem", fontWeight: 700, color: "rgba(245,200,66,0.03)", lineHeight: 1, userSelect: "none" }}>&</Box>
        <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: BRAND.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.9rem", mb: 2 }}>
            Our Story
          </Typography>
          <Typography variant="h1" sx={{ color: "#fff", fontSize: { xs: "2.4rem", md: "4rem" }, mb: 3, lineHeight: 1.1 }}>
            Made with Memory,<br />Made with{" "}
            <Box component="span" sx={{ color: BRAND.gold, fontStyle: "italic" }}>Love</Box>
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,255,255,0.68)", fontSize: { xs: "1.1rem", md: "1.3rem" }, lineHeight: 1.8 }}>
            A family business, a photographer's dream — a love letter to the memories that make us who we are.
          </Typography>
        </Container>
      </Box>

      {/* Founder Story */}
      <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.softWhite }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
                <Box sx={{ aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
                  <Image src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" alt="Founder" fill style={{ objectFit: "cover" }} />
                </Box>
                {/* Decorative borders */}
                <Box sx={{ position: "absolute", bottom: -18, right: -18, width: 110, height: 110, border: `2px solid ${BRAND.gold}`, zIndex: -1 }} />
                <Box sx={{ position: "absolute", top: -16, left: -16, width: 75, height: 75, border: `1px solid rgba(91,45,158,0.3)`, zIndex: -1 }} />
                {/* Purple badge */}
                <Box sx={{ position: "absolute", bottom: 24, left: 24, backgroundColor: BRAND.purple, px: 3, py: 2 }}>
                  <Typography sx={{ fontFamily: "'Jost'", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.gold, mb: 0.3 }}>
                    Founded
                  </Typography>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    2024
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontFamily: "'Jost'", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 3 }}>
                The Beginning
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 4, color: BRAND.purpleBlack }}>
                A Photographer's Vision for <Box component="span" sx={{ color: BRAND.purple, fontStyle: "italic" }}>Forever Moments</Box>
              </Typography>
              <Typography sx={{ fontFamily: "'Jost'", fontWeight: 300, color: BRAND.muted, lineHeight: 1.9, mb: 3, fontSize: "0.93rem" }}>
                Paperboat Gifts & Forever Moments began in 2024 as a quiet observation by our founder — a professional photographer who had spent years capturing the most beautiful moments in people's lives.
              </Typography>
              <Typography sx={{ fontFamily: "'Jost'", fontWeight: 300, color: BRAND.muted, lineHeight: 1.9, mb: 4, fontSize: "0.93rem" }}>
                "I noticed that my clients had hundreds of extraordinary photographs on their phones and laptops, but their walls were completely bare. Their memories were trapped in digital files that rarely got seen. That broke my heart a little."
              </Typography>
              <Box sx={{ borderLeft: `3px solid ${BRAND.purple}`, pl: 3, py: 1 }}>
                <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: BRAND.purple, fontSize: "1.2rem", lineHeight: 1.7 }}>
                  "Paperboat Gifts was born to bridge that gap — to bring photographs back into the home, onto the wall, and into daily life where they belong forever."
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.lavender }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mb: 2 }}>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
            <Typography sx={{ fontFamily: "'Jost'", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold }}>Our Journey</Typography>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
          </Box>
          <Typography variant="h2" sx={{ textAlign: "center", mb: 8, fontSize: { xs: "2rem", md: "2.6rem" }, color: BRAND.purpleBlack }}>
            Growing, One Memory at a Time
          </Typography>
          {/* Timeline list */}
          {timeline.map((item, i) => (
            <Box key={i} sx={{ display: "flex", gap: 4, mb: 4, alignItems: "flex-start" }}>
              <Box sx={{ flexShrink: 0, width: 80, textAlign: "right" }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: BRAND.purple, lineHeight: 1 }}>
                  {item.year}
                </Typography>
              </Box>
              <Box sx={{ position: "relative", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: 12, height: 12, backgroundColor: BRAND.gold, borderRadius: "50%", mt: 1 }} />
                {i < timeline.length - 1 && <Box sx={{ width: "1px", flex: 1, minHeight: 40, backgroundColor: "rgba(91,45,158,0.15)", mt: 1 }} />}
              </Box>
              <Box sx={{ flex: 1, pb: i < timeline.length - 1 ? 3 : 0 }}>
                <Typography sx={{ fontFamily: "'Jost'", fontWeight: 300, color: BRAND.muted, fontSize: "0.9rem", lineHeight: 1.85, mt: 0.8 }}>
                  {item.event}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: BRAND.softWhite }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mb: 2 }}>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
            <Typography sx={{ fontFamily: "'Jost'", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold }}>What We Stand For</Typography>
            <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />
          </Box>
          <Typography variant="h2" sx={{ textAlign: "center", mb: 8, fontSize: { xs: "2rem", md: "2.6rem" }, color: BRAND.purpleBlack }}>
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} key={v.title}>
                <Box sx={{ display: "flex", gap: 3, p: 4, border: `1px solid rgba(91,45,158,0.1)`, "&:hover": { borderColor: BRAND.purple, boxShadow: `0 8px 32px rgba(91,45,158,0.08)` }, transition: "all 0.3s" }}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 700, color: `rgba(91,45,158,0.12)`, lineHeight: 1, flexShrink: 0 }}>
                    {v.n}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: BRAND.purpleBlack, mb: 1 }}>{v.title}</Typography>
                    <Typography sx={{ fontFamily: "'Jost'", fontWeight: 300, fontSize: "0.87rem", color: BRAND.muted, lineHeight: 1.85 }}>{v.desc}</Typography>
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
