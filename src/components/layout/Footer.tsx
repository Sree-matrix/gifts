"use client";
import Link from "next/link";
import { Box, Container, Grid, Typography, Divider, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { BRAND } from "@/lib/theme";

const footerLinks = {
  products: [
    { label: "Photo Frames",   href: "/products/frames" },
    { label: "Polaroid Prints", href: "/products/polaroids" },
    { label: "Photo Albums",   href: "/products/albums" },
    { label: "Miniatures",     href: "/products/miniatures" },
    { label: "Fridge Magnets", href: "/products/magnets" },
  ],
  company: [
    { label: "About Us",         href: "/about" },
    { label: "Testimonials",     href: "/testimonials" },
    { label: "Contact Us",       href: "/contact" },
    { label: "Order Now",        href: "/order" },
    { label: "Photography Studio", href: "https://paperboatphotography.in", external: true },
  ],
};

export default function Footer() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(160deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`,
        color: "#FDFBFF",
        pt: 10, pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand block */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 1 }}>
              <Typography sx={{
                fontFamily: "'Jost', sans-serif", fontWeight: 700,
                fontSize: "1.5rem", color: "#FDFBFF", letterSpacing: "0.02em",
              }}>
                paperboat
                <Box component="span" sx={{ color: BRAND.gold }}> &amp;</Box>
              </Typography>
              <Typography sx={{
                fontFamily:    "'Jost', sans-serif",
                fontWeight:    300,
                fontSize:      "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "rgba(253,251,255,0.45)",
                mb: 3,
              }}>
                gifts &amp; forever moments
              </Typography>
            </Box>
            <Typography variant="body2" sx={{
              color: "rgba(253,251,255,0.58)", lineHeight: 1.9,
              mb: 4, maxWidth: 300, fontWeight: 300,
            }}>
              We turn your most cherished photographs into handcrafted keepsakes — made with love in Chennai since 2024.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[
                { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: "https://instagram.com/paperboatgifts", label: "Instagram" },
                { icon: <WhatsAppIcon  sx={{ fontSize: 18 }} />, href: `https://wa.me/${wa}`, label: "WhatsApp" },
                { icon: <FacebookIcon  sx={{ fontSize: 18 }} />, href: "https://facebook.com/paperboatgifts", label: "Facebook" },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{
                    color:  "rgba(253,251,255,0.55)",
                    border: `1px solid rgba(245,200,66,0.25)`,
                    borderRadius: 0, width: 40, height: 40,
                    transition: "all 0.3s",
                    "&:hover": {
                      color:           BRAND.gold,
                      borderColor:     BRAND.gold,
                      backgroundColor: "rgba(245,200,66,0.08)",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Products */}
          <Grid item xs={6} md={2}>
            <Typography sx={{
              fontFamily:    "'Jost', sans-serif", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              fontSize: "0.65rem", color: BRAND.gold, mb: 3,
            }}>
              Products
            </Typography>
            {footerLinks.products.map((l) => (
              <Box key={l.href} sx={{ mb: 1.8 }}>
                <Link href={l.href} style={{ textDecoration: "none" }}>
                  <Typography sx={{
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    fontSize: "0.84rem", color: "rgba(253,251,255,0.55)",
                    transition: "color 0.2s",
                    "&:hover":  { color: BRAND.gold },
                  }}>
                    {l.label}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Company */}
          <Grid item xs={6} md={2}>
            <Typography sx={{
              fontFamily:    "'Jost', sans-serif", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              fontSize: "0.65rem", color: BRAND.gold, mb: 3,
            }}>
              Company
            </Typography>
            {footerLinks.company.map((l) => (
              <Box key={l.href} sx={{ mb: 1.8 }}>
                <Link href={l.href} style={{ textDecoration: "none" }}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Typography sx={{
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    fontSize: "0.84rem", color: "rgba(253,251,255,0.55)",
                    transition: "color 0.2s",
                    "&:hover":  { color: BRAND.gold },
                  }}>
                    {l.label}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography sx={{
              fontFamily:    "'Jost', sans-serif", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              fontSize: "0.65rem", color: BRAND.gold, mb: 3,
            }}>
              Contact
            </Typography>
            {[
              { label: "WhatsApp / Phone", value: "+91 98765 43210" },
              { label: "Email",    value: "hello@paperboatphotography.in" },
              { label: "Location", value: "Chennai, Tamil Nadu, India" },
              { label: "Hours",    value: "Mon – Sat, 9 am – 7 pm" },
            ].map((info) => (
              <Box key={info.label} sx={{ mb: 2.5 }}>
                <Typography sx={{
                  fontFamily:    "'Jost', sans-serif", fontSize: "0.65rem",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "rgba(253,251,255,0.35)", mb: 0.4,
                }}>
                  {info.label}
                </Typography>
                <Typography sx={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  fontSize: "0.87rem", color: "rgba(253,251,255,0.72)",
                }}>
                  {info.value}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(245,200,66,0.12)", my: 6 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography sx={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: "0.76rem", color: "rgba(253,251,255,0.35)",
          }}>
            © 2025 Paperboat Gifts &amp; Forever Moments. All rights reserved.
          </Typography>
          <Typography sx={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "0.92rem", color: "rgba(245,200,66,0.55)",
          }}>
            Made with love in Chennai
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
