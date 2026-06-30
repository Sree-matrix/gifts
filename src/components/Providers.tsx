"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import { theme } from "@/lib/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "'Nunito Sans', sans-serif",
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
