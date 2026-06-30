"use client";
import { useState } from "react";
import { Box, Container, Typography, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/theme";

const faqs = [
  {
    q: "How long does it take to receive my order?",
    a: "Most orders are crafted and dispatched within 3–5 business days. You'll receive a WhatsApp update when your order ships. Delivery across India typically takes 2–4 additional days depending on your location.",
  },
  {
    q: "What photo resolution do I need to send?",
    a: "For the best print quality, we recommend photos of at least 2MB or 2000×2000 pixels. JPEG and PNG formats work best. If you're unsure, share what you have and we'll advise you on suitability before printing.",
  },
  {
    q: "Can I customize the size of any frame?",
    a: "Yes! We accept custom size requests for most products. Simply mention your desired dimensions while placing your order via WhatsApp or the order form, and we'll confirm feasibility and pricing.",
  },
  {
    q: "Do you ship outside Chennai?",
    a: "Absolutely — we ship pan-India via trusted courier partners. International shipping is available for select products on request. Contact us on WhatsApp for international orders.",
  },
  {
    q: "What if I'm not happy with the final product?",
    a: "Your satisfaction is our top priority. If there's any defect, damage during transit, or quality issue, we'll replace or refund your order — no questions asked. We send a preview before printing whenever possible.",
  },
  {
    q: "How do I upload my photos for the order?",
    a: "You can upload photos directly through our order form, or share them via WhatsApp after placing the order. We'll also accept Google Drive or iCloud links for large files.",
  },
  {
    q: "Do you offer bulk or corporate orders?",
    a: "Yes! We offer bulk pricing for weddings, corporate gifting, events, and festivals. Minimum quantities apply. Contact us directly via WhatsApp or email for a custom quote.",
  },
  {
    q: "Are gift wrapping and packaging included?",
    a: "Every order comes beautifully packaged in branded box with tissue paper and a ribbon. Premium gift wrapping with a handwritten note is available at a small additional charge.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.purpleGhost }} ref={ref}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography sx={{
            fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em",
            textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold,
            mb: 2, display: "flex", alignItems: "center", gap: 2, justifyContent: "center",
            "&::before, &::after": { content: '""', display: "block", height: "1px", width: 36, backgroundColor: BRAND.gold },
          }}>
            FAQ
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, color: BRAND.charcoal, mb: 2 }}>
            Questions We Hear Often
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: BRAND.grey, fontSize: "1.1rem", lineHeight: 1.7 }}>
            Can't find your answer here? WhatsApp us — we usually reply within minutes.
          </Typography>
        </Box>

        {/* Accordion */}
        <Box>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Box
                sx={{
                  borderBottom: `1px solid rgba(91,45,142,0.12)`,
                  "&:first-of-type": { borderTop: `1px solid rgba(91,45,142,0.12)` },
                }}
              >
                <Box
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  sx={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    py: 3, cursor: "pointer",
                    "&:hover .faq-q": { color: BRAND.purple },
                    transition: "all 0.2s",
                  }}
                >
                  <Typography
                    className="faq-q"
                    sx={{
                      fontFamily: "'Playfair Display', serif", fontWeight: 600,
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: openIndex === i ? BRAND.purple : BRAND.charcoal,
                      transition: "color 0.2s", pr: 3, lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </Typography>
                  <Box
                    sx={{
                      flexShrink: 0, width: 32, height: 32, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      border: `1px solid ${openIndex === i ? BRAND.purple : "rgba(91,45,142,0.25)"}`,
                      color: openIndex === i ? BRAND.purple : BRAND.grey,
                      transition: "all 0.25s",
                      backgroundColor: openIndex === i ? BRAND.purplePale : "transparent",
                    }}
                  >
                    {openIndex === i ? <RemoveIcon sx={{ fontSize: 16 }} /> : <AddIcon sx={{ fontSize: 16 }} />}
                  </Box>
                </Box>
                <Collapse in={openIndex === i}>
                  <Box sx={{ pb: 3, pr: 6 }}>
                    <Typography sx={{
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: "0.92rem", color: BRAND.grey, lineHeight: 1.85,
                    }}>
                      {faq.a}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{
          mt: 6, p: { xs: 3, md: 4 }, textAlign: "center",
          border: `1px solid rgba(91,45,142,0.15)`,
          background: `linear-gradient(135deg, ${BRAND.purplePale}, #FDFBFF)`,
        }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: BRAND.charcoal, mb: 1 }}>
            Still have a question?
          </Typography>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.88rem", color: BRAND.grey, mb: 2.5 }}>
            Our team is available Monday – Saturday, 9am to 7pm IST.
          </Typography>
          <Box
            component="a"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block", backgroundColor: "#25D366", color: "#fff",
              px: 4, py: 1.5, textDecoration: "none",
              fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.12em",
              fontWeight: 400, transition: "all 0.25s",
              "&:hover": { backgroundColor: "#1DB954", boxShadow: "0 6px 20px rgba(37,211,102,0.4)" },
            }}
          >
            💬 WhatsApp Us Now
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
