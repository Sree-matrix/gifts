"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BRAND } from "@/lib/theme";

interface SectionLabelProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionLabel({
  eyebrow, title, subtitle, centered = true, light = false,
}: SectionLabelProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const titleColor   = light ? "#FDFBFF" : BRAND.charcoal;
  const subtitleColor = light ? "rgba(253,251,255,0.72)" : BRAND.grey;

  return (
    <Box ref={ref} sx={{ textAlign: centered ? "center" : "left", mb: { xs: 5, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <Box sx={{
          display: "flex", alignItems: "center", gap: 2,
          justifyContent: centered ? "center" : "flex-start", mb: 2,
        }}>
          {centered && <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />}
          <Typography sx={{
            fontFamily: "'Jost', sans-serif", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            fontSize: "0.68rem", color: BRAND.gold,
          }}>
            {eyebrow}
          </Typography>
          {centered && <Box sx={{ height: "1px", width: 36, backgroundColor: BRAND.gold }} />}
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        <Typography variant="h2" sx={{
          fontSize: { xs: "2rem", md: "2.8rem", lg: "3.2rem" },
          color: titleColor, mb: subtitle ? 3 : 0, lineHeight: 1.18,
        }}>
          {title}
        </Typography>
      </motion.div>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <Typography variant="subtitle1" sx={{
            color: subtitleColor,
            maxWidth: 560, mx: centered ? "auto" : 0,
            fontSize: { xs: "1rem", md: "1.12rem" },
          }}>
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}
