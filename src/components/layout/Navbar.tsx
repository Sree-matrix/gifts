"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItemButton, ListItemText, Collapse, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/theme";

type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };

const leftLinks: NavLink[] = [
  { label: "Home",     href: "/" },
  {
    label: "Products", href: "/products",
    children: [
      { label: "Photo Frames",    href: "/products/frames" },
      { label: "Polaroid Prints", href: "/products/polaroids" },
      { label: "Photo Albums",    href: "/products/albums" },
      { label: "Miniatures",      href: "/products/miniatures" },
      { label: "Fridge Magnets",  href: "/products/magnets" },
    ],
  },
  { label: "About",        href: "/about" },
];

const rightLinks: NavLink[] = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact",      href: "/contact" },
];

const navLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]             = useState(false);
  const [mobileProductsOpen, setMobileProducts] = useState(false);
  const [scrolled, setScrolled]                 = useState(false);
  const [desktopHover, setDesktopHover]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkColor      = scrolled ? BRAND.charcoal    : "rgba(253,251,255,0.9)";
  const linkHover      = BRAND.gold;

  const renderNavItem = (link: NavLink) =>
    link.children ? (
      <Box
        key={link.label}
        sx={{ position: "relative" }}
        onMouseEnter={() => setDesktopHover(true)}
        onMouseLeave={() => setDesktopHover(false)}
      >
        <Button
          endIcon={
            <ExpandMore sx={{
              fontSize: 15,
              transition: "transform 0.3s",
              transform: desktopHover ? "rotate(180deg)" : "none",
            }} />
          }
          sx={{
            color:      linkColor,
            fontWeight: 500,
            fontSize:   "0.82rem",
            letterSpacing: "0.14em",
            fontFamily: "'Lexend Deca', sans-serif",
            textTransform: "uppercase",
            px: 2, py: 1,
            transition: "color 0.3s",
            "&:hover":  { color: linkHover, backgroundColor: "transparent" },
          }}
        >
          {link.label}
        </Button>

        <AnimatePresence>
          {desktopHover && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#FDFBFF",
                border: `1px solid rgba(91,45,142,0.12)`,
                boxShadow: "0 20px 60px rgba(30,20,40,0.14)",
                minWidth: 210,
                zIndex: 1000,
              }}
            >
              {link.children.map((c) => (
                <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                  <Box sx={{
                    px: 3, py: 1.8,
                    borderBottom: `1px solid rgba(91,45,142,0.07)`,
                    "&:last-child": { borderBottom: "none" },
                    "&:hover": {
                      backgroundColor: BRAND.purplePale,
                      "& .nav-child": { color: BRAND.purple },
                    },
                    transition: "background 0.2s",
                  }}>
                    <Typography className="nav-child" sx={{
                      fontFamily:    "'Martel Sans', sans-serif",
                      fontWeight:    400,
                      fontSize:      "0.85rem",
                      letterSpacing: "0.04em",
                      color:         BRAND.charcoal,
                      transition:    "color 0.2s",
                    }}>
                      {c.label}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    ) : (
      <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
        <Button sx={{
          color:      linkColor,
          fontWeight: 500,
          fontSize:   "0.82rem",
          letterSpacing: "0.14em",
          fontFamily: "'Lexend Deca', sans-serif",
          textTransform: "uppercase",
          px: 2, py: 1,
          transition: "color 0.3s",
          "&:hover":  { color: linkHover, backgroundColor: "transparent" },
        }}>
          {link.label}
        </Button>
      </Link>
    );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? "rgba(253,251,255,0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom:   scrolled
            ? `1px solid rgba(91,45,142,0.12)`
            : "none",
          transition: "all 0.4s ease",
        }}
      >
        <Toolbar sx={{
          justifyContent: "space-between",
          py:   { xs: 1.5, md: scrolled ? 1.2 : 2 },
          px:   { xs: 2,   md: 6 },
          transition: "padding 0.4s ease",
        }}>
          {/* ── Desktop Links Left ── */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "flex-start", alignItems: "center", gap: 0.5 }}>
            {leftLinks.map(renderNavItem)}
          </Box>

          {/* ── Logo Container (Centered Header Variant Context) ── */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Box sx={{
                position: "relative",
                height: { xs: 38, md: 46 },
                width:  { xs: 80, md: 97 },
                flexShrink: 0,
                filter: scrolled ? "brightness(0)" : "none",
                transition: "filter 0.4s",
              }}>
                <Image
                  src="/images/paperboatgiftslogo.png"
                  alt="Paperboat Gifts & Forever Moments"
                  fill
                  priority
                  sizes="97px"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </Box>
            </Link>
            
            {/* Embedded H2 Component Mapping */}
            <Typography variant="h2" sx={{ display: "none" }}>
              Paperboat Gifts
            </Typography>
          </Box>

          {/* ── Desktop Links Right + Order Now CTA ── */}
          <Box sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 0.5 }}>
            {rightLinks.map(renderNavItem)}

            <Link href="/order" style={{ textDecoration: "none", marginLeft: 12 }}>
              <Button variant="contained" sx={{
                backgroundColor: BRAND.purple,
                color:           "#FDFBFF",
                fontFamily:      "'Playfair Display SC', serif",
                fontWeight:      700,
                fontSize:        "0.76rem",
                letterSpacing:   "0.16em",
                px: 3.5, py: 1.4,
                borderRadius:    0,
                "&:hover": {
                  backgroundColor: BRAND.purpleDark,
                  boxShadow: "0 8px 28px rgba(91,45,142,0.4)",
                },
              }}>
                Order Now
              </Button>
            </Link>
          </Box>

          {/* ── Mobile Trigger Menu ── */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color:   scrolled ? BRAND.charcoal : "#FDFBFF",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Sidebar Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: "82vw", maxWidth: 340, backgroundColor: "#FDFBFF" } }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Box sx={{ position: "relative", height: 40, width: 84, filter: "brightness(0)" }}>
              <Image
                src="/images/paperboatgiftslogo.png"
                alt="Paperboat Gifts & Forever Moments"
                fill
                sizes="84px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </Box>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon sx={{ color: BRAND.charcoal }} />
            </IconButton>
          </Box>

          <List disablePadding>
            {navLinks.map((link) =>
              link.children ? (
                <Box key={link.label}>
                  <ListItemButton
                    onClick={() => setMobileProducts(!mobileProductsOpen)}
                    sx={{ px: 0, py: 1.4, borderBottom: `1px solid rgba(91,45,142,0.08)` }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontFamily:    "'Oswald', sans-serif",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontSize:      "0.9rem",
                        fontWeight:    500,
                        color:         BRAND.charcoal,
                      }}
                    />
                    <ExpandMore sx={{
                      color:     BRAND.purple,
                      transform: mobileProductsOpen ? "rotate(180deg)" : "none",
                      transition: "0.3s",
                    }} />
                  </ListItemButton>
                  <Collapse in={mobileProductsOpen}>
                    {link.children.map((c) => (
                      <Link key={c.href} href={c.href} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                        <ListItemButton sx={{ pl: 3, py: 1.2 }}>
                          <ListItemText
                            primary={c.label}
                            primaryTypographyProps={{
                              fontFamily: "'Martel Sans', sans-serif",
                              fontSize:   "0.88rem",
                              color:      BRAND.purple,
                              fontWeight: 400,
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                  </Collapse>
                </Box>
              ) : (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <ListItemButton sx={{ px: 0, py: 1.4, borderBottom: `1px solid rgba(91,45,142,0.08)` }}>
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontFamily:    "'Oswald', sans-serif",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontSize:      "0.9rem",
                        fontWeight:    500,
                        color:         BRAND.charcoal,
                      }}
                    />
                  </ListItemButton>
                </Link>
              )
            )}
            
            <Box sx={{ mt: 4 }}>
              <Link href="/order" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: BRAND.purple,
                    fontFamily:      "'Playfair Display SC', serif",
                    fontWeight:      700,
                    py: 2,
                    letterSpacing:   "0.16em",
                    borderRadius:    0,
                    "&:hover": { backgroundColor: BRAND.purpleDark },
                  }}
                >
                  Order Now
                </Button>
              </Link>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}