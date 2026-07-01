"use client";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
  const message = encodeURIComponent("Hello Paperboat Gifts! I'd like to enquire about your products.");

  return (
    <Box
      component={motion.a as any}
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.96 }}
      sx={{
        // Floating positioning
        position: "fixed",
        bottom: { xs: 20, md: 32 },
        right: { xs: 20, md: 32 },
        zIndex: 9999,

        // Layout & Base styles
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        overflow: "hidden",
        textDecoration: "none",
        backgroundColor: "#00d757",
        color: "#fff",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.199)",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",

        // Active/Click effect
        "&:active": {
          transform: "translate(2px, 2px)",
        },

        // Expand on hover
        "&:hover": {
          width: "150px",
          borderRadius: "40px",
          boxShadow: "0 8px 32px rgba(0, 215, 87, 0.38)",
          
          "& .whatsapp-icon-wrapper": {
            width: "30%",
            paddingLeft: "10px",
          },
          "& .whatsapp-text": {
            opacity: 1,
            width: "70%",
            paddingRight: "10px",
          },
        },
      }}
    >
      {/* Icon Wrapper */}
      <Box
        className="whatsapp-icon-wrapper"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 25 }} />
      </Box>

      {/* Text Container */}
      <Typography
        className="whatsapp-text"
        sx={{
          position: "absolute",
          right: 0,
          width: 0,
          opacity: 0,
          color: "white",
          fontSize: "1.05rem", 
          fontWeight: 600,
          fontFamily: "'Jost', sans-serif",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease-in-out",
        }}
      >
        Whatsapp
      </Typography>
    </Box>
  );
}