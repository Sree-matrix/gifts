"use client";
import { Box, Typography, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const number  = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const message = encodeURIComponent("Hello Paperboat Gifts! I'd like to enquire about your products.");
  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Box
        component={motion.a as any}
        href={`https://wa.me/${number}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        sx={{
          position:    "fixed",
          bottom:      { xs: 20, md: 32 },
          right:       { xs: 20, md: 32 },
          zIndex:      9999,
          display:     "flex",
          alignItems:  "center",
          gap:         1.5,
          backgroundColor: "#25D366",
          color:       "#fff",
          px:          { xs: 2, sm: 3 },
          py:          1.6,
          textDecoration: "none",
          boxShadow:   "0 8px 32px rgba(37,211,102,0.38)",
          transition:  "all 0.3s",
          "&:hover":   {
            backgroundColor: "#1DB954",
            boxShadow:  "0 12px 40px rgba(37,211,102,0.5)",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 22 }} />
        <Typography sx={{
          fontFamily:    "'Jost', sans-serif",
          fontWeight:    500,
          fontSize:      "0.78rem",
          letterSpacing: "0.08em",
          display:       { xs: "none", sm: "block" },
        }}>
          Order on WhatsApp
        </Typography>
      </Box>
    </Tooltip>
  );
}
