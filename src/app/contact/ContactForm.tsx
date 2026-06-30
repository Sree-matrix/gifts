"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import toast from "react-hot-toast";
import { BRAND } from "@/lib/theme";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  productInterested: z.string().min(1, "Please select a product category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const products = ["Photo Frames", "Polaroid Prints", "Photo Albums", "Miniatures", "Fridge Magnets", "Wedding Package", "Other / Custom Order"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", productInterested: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    }
  };

  if (submitted) {
    return (
      <Box sx={{ textAlign: "center", py: 10, border: `1px solid ${BRAND.lightGrey}`, p: 8 }}>
        <Box sx={{ width: 72, height: 72, backgroundColor: BRAND.purplePale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 3 }}>
          <CheckCircleOutlineIcon sx={{ color: BRAND.purple, fontSize: 36 }} />
        </Box>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600, color: BRAND.charcoal, mb: 2 }}>
          Message Received!
        </Typography>
        <Typography sx={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300, color: BRAND.grey, mb: 4 }}>
          Thank you for reaching out. We'll get back to you within a few hours.
        </Typography>
        <Button onClick={() => { setSubmitted(false); reset(); }} variant="outlined" sx={{ borderColor: BRAND.purple, color: BRAND.purple, px: 5, py: 1.5, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>
          Send Another Message
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ border: `1px solid ${BRAND.lightGrey}`, p: { xs: 3, md: 5 } }}>
      <Box sx={{ height: 3, background: `linear-gradient(90deg, ${BRAND.purple}, ${BRAND.gold})`, mx: -5, mt: -5, mb: 5, display: { xs: "none", md: "block" } }} />
      <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 600, color: BRAND.charcoal, mb: 4 }}>
        Send Us a Message
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Controller name="name" control={control} render={({ field }) => (
            <TextField {...field} label="Your Name" fullWidth error={!!errors.name} helperText={errors.name?.message} />
          )} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller name="phone" control={control} render={({ field }) => (
            <TextField {...field} label="Phone Number" fullWidth error={!!errors.phone} helperText={errors.phone?.message} />
          )} />
        </Grid>
        <Grid item xs={12}>
          <Controller name="email" control={control} render={({ field }) => (
            <TextField {...field} label="Email Address" fullWidth error={!!errors.email} helperText={errors.email?.message} />
          )} />
        </Grid>
        <Grid item xs={12}>
          <Controller name="productInterested" control={control} render={({ field }) => (
            <TextField {...field} select label="Product Interested In" fullWidth error={!!errors.productInterested} helperText={errors.productInterested?.message}>
              {products.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
            </TextField>
          )} />
        </Grid>
        <Grid item xs={12}>
          <Controller name="message" control={control} render={({ field }) => (
            <TextField {...field} label="Your Message" multiline rows={5} fullWidth error={!!errors.message} helperText={errors.message?.message} />
          )} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} endIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendOutlinedIcon />}
            sx={{ backgroundColor: BRAND.purple, py: 2.2, fontSize: "0.78rem", letterSpacing: "0.15em", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, boxShadow: "none", "&:hover": { backgroundColor: BRAND.purpleLight, boxShadow: `0 8px 24px rgba(75,45,143,0.35)` } }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
