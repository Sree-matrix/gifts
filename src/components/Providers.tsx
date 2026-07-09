"use client";

import React, { useEffect } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import { theme } from "@/lib/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Collect all requested CDN & Google font stylesheets
    const fontUrls = [
      "https://fonts.cdnfonts.com/css/rightman-signature",
      "https://fonts.cdnfonts.com/css/derivia",
      "https://fonts.cdnfonts.com/css/martel-sans",
      "https://fonts.cdnfonts.com/css/spectral",
      "https://fonts.googleapis.com/css2?family=Bangers&family=Great+Vibes&family=Julius+Sans+One&family=Lexend+Deca:wght@100..900&family=Love+Light&family=Oswald:wght@200..700&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Ruthie&display=swap"
    ];

    fontUrls.forEach((url) => {
      // Prevent duplicate link insertions if re-rendering occurs
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "'Martel Sans', sans-serif",
              fontSize: "14px",
              borderRadius: 0,
              border: "1px solid rgba(75,45,143,0.2)",
            },
            success: { iconTheme: { primary: "#4B2D8F", secondary: "#FDFCFF" } },
          }}
        />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}