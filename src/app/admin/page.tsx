"use client";
import { useEffect, useState, useCallback } from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import RefreshIcon from "@mui/icons-material/Refresh";
import LogoutIcon from "@mui/icons-material/Logout";
import { BRAND } from "@/lib/theme";

interface Order {
  id: string;
  productId: string;
  productName: string;
  category: string;
  priceLabel: string;
  size: string;
  images: string[];
  createdAt: string;
}

const STORAGE_KEY = "pb_admin_pw";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const loadOrders = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/orders", { headers: { "x-admin-password": pw } });
      if (res.status === 401) {
        setError("Incorrect password.");
        sessionStorage.removeItem(STORAGE_KEY);
        setAuthed(false);
        return;
      }
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setOrders(data.orders || []);
      setAuthed(true);
      sessionStorage.setItem(STORAGE_KEY, pw);
    } catch {
      setError("Could not load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) loadOrders(saved);
  }, [loadOrders]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) loadOrders(password.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setPassword("");
    setOrders([]);
  };

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  };

  // ── Login screen ──────────────────────────────────────────────
  if (!authed) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: BRAND.purpleGhost, px: 2 }}>
        <Box component="form" onSubmit={handleLogin} sx={{ backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.12)`, p: { xs: 4, md: 5 }, width: "100%", maxWidth: 400, textAlign: "center" }}>
          <LockIcon sx={{ fontSize: 40, color: BRAND.purple, mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: "1.6rem", color: BRAND.charcoal, mb: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: BRAND.grey, mb: 3 }}>
            Enter the admin password to view orders.
          </Typography>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
          />
          <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{
            backgroundColor: BRAND.purple, color: "#FDFBFF", py: 1.8, fontSize: "0.78rem", letterSpacing: "0.12em",
            "&:hover": { backgroundColor: BRAND.purpleDark },
          }}>
            {loading ? "Checking…" : "Log In"}
          </Button>
        </Box>
      </Box>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: BRAND.purpleGhost, pt: { xs: 10, md: 12 }, pb: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 4 }}>
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: BRAND.charcoal }}>
              Orders
            </Typography>
            <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: BRAND.grey, mt: 0.5 }}>
              {orders.length} order{orders.length !== 1 ? "s" : ""} received
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button onClick={() => loadOrders(sessionStorage.getItem(STORAGE_KEY) || "")} disabled={loading} startIcon={<RefreshIcon />} variant="outlined" sx={{
              borderColor: BRAND.purple, color: BRAND.purple, py: 1.2, fontSize: "0.72rem",
              "&:hover": { backgroundColor: BRAND.purplePale, borderColor: BRAND.purple },
            }}>
              Refresh
            </Button>
            <Button onClick={handleLogout} startIcon={<LogoutIcon />} sx={{
              color: BRAND.grey, py: 1.2, fontSize: "0.72rem",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
            }}>
              Log Out
            </Button>
          </Box>
        </Box>

        {orders.length === 0 && !loading && (
          <Box sx={{ textAlign: "center", py: 10, backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.1)` }}>
            <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: BRAND.grey }}>
              No orders yet. New orders from the product pages will appear here.
            </Typography>
          </Box>
        )}

        <Grid container spacing={3}>
          {orders.map((o) => (
            <Grid item xs={12} sm={6} md={4} key={o.id}>
              <Box sx={{ backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.12)`, height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Photos */}
                <Box sx={{ display: "flex", gap: 0.5, p: 0.5, backgroundColor: BRAND.purplePale, flexWrap: "wrap" }}>
                  {o.images.map((img, i) => (
                    <Box
                      key={i}
                      onClick={() => setLightbox(img)}
                      sx={{ position: "relative", width: o.images.length > 1 ? "calc(50% - 2px)" : "100%", aspectRatio: "4/3", cursor: "pointer", overflow: "hidden" }}
                    >
                      {/* base64 data URLs — use plain img to avoid next/image optimizer */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={`${o.productName} ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                  ))}
                </Box>
                {/* Details */}
                <Box sx={{ p: 2.5, flex: 1 }}>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: BRAND.purpleLight, mb: 0.5 }}>
                    {o.category || "—"}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: BRAND.charcoal, mb: 1 }}>
                    {o.productName}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
                    <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: BRAND.purple, fontWeight: 600 }}>
                      {o.priceLabel}
                    </Typography>
                    {o.size && (
                      <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: BRAND.charcoal }}>
                        Size: <strong>{o.size}</strong>
                      </Typography>
                    )}
                  </Box>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: BRAND.grey }}>
                    {fmtDate(o.createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lightbox */}
      {lightbox && (
        <Box
          onClick={() => setLightbox(null)}
          sx={{ position: "fixed", inset: 0, zIndex: 1300, backgroundColor: "rgba(30,20,40,0.9)", display: "flex", alignItems: "center", justifyContent: "center", p: 3, cursor: "zoom-out" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Order photo" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </Box>
      )}
    </Box>
  );
}
