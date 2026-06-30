"use client";
import { Box, Container, Grid, Typography, TextField, Button, MenuItem } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { BRAND } from "@/lib/theme";
import SendIcon from "@mui/icons-material/Send";

const schema = z.object({
  name:              z.string().min(2, "Please enter your name"),
  phone:             z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email:             z.string().email("Enter a valid email address"),
  productInterested: z.string().min(1, "Please select a product category"),
  message:           z.string().min(10, "Please tell us a bit more (min. 10 characters)"),
});
type FormData = z.infer<typeof schema>;

const productOptions = ["Photo Frames","Polaroid Prints","Photo Albums","Miniatures","Fridge Magnets","Other / Not sure"];

export default function ContactPage() {
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", productInterested: "", message: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      toast.success("Message sent! We'll get back to you soon 🎁");
      reset();
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      fontFamily:   "'Jost', sans-serif",
      fontWeight:   300,
    },
    "& .MuiInputLabel-root": { fontFamily: "'Jost', sans-serif", fontWeight: 300 },
  };

  return (
    <>
      <Box sx={{ pt: 14, pb: 10, background: `linear-gradient(145deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalMid} 100%)`, position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)` }} />
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="h1" sx={{ color: "#FDFBFF", fontSize: { xs: "2.4rem", md: "3.8rem" }, mb: 3 }}>
            Let's Create Something Beautiful
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(253,251,255,0.68)", fontSize: { xs: "1.05rem", md: "1.25rem" } }}>
            Tell us about your memory and we'll make it timeless.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: BRAND.purpleGhost }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* Info panel */}
            <Grid item xs={12} md={4}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 600, color: BRAND.charcoal, mb: 4 }}>
                We're Here for You
              </Typography>
              {[
                { emoji: "💬", title: "WhatsApp", detail: "+91 98765 43210", note: "Fastest response — usually within 1 hour" },
                { emoji: "📧", title: "Email",    detail: "hello@paperboatphotography.in", note: "We reply within 24 hours" },
                { emoji: "📍", title: "Location", detail: "Chennai, Tamil Nadu", note: "Pan-India delivery available" },
                { emoji: "⏰", title: "Hours",    detail: "Mon – Sat, 9 am – 7 pm", note: "Sunday orders accepted, replied Monday" },
              ].map((info) => (
                <Box key={info.title} sx={{ display: "flex", gap: 2.5, mb: 4 }}>
                  <Box sx={{ width: 48, height: 48, backgroundColor: BRAND.purplePale, border: `1px solid rgba(91,45,142,0.15)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Typography sx={{ fontSize: "1.3rem" }}>{info.emoji}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: BRAND.grey, mb: 0.4 }}>
                      {info.title}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 600, color: BRAND.charcoal, mb: 0.3 }}>
                      {info.detail}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: BRAND.grey }}>
                      {info.note}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>

            {/* Form */}
            <Grid item xs={12} md={8}>
              <Box sx={{ backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.1)`, p: { xs: 3, md: 5 } }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 600, color: BRAND.charcoal, mb: 4 }}>
                  Send Us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <Controller name="name" control={control} render={({ field }) => (
                        <TextField {...field} label="Your Name *" fullWidth error={!!errors.name} helperText={errors.name?.message} sx={fieldSx} />
                      )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller name="phone" control={control} render={({ field }) => (
                        <TextField {...field} label="Phone Number *" fullWidth error={!!errors.phone} helperText={errors.phone?.message} inputProps={{ maxLength: 10 }} sx={fieldSx} />
                      )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller name="email" control={control} render={({ field }) => (
                        <TextField {...field} label="Email Address *" fullWidth error={!!errors.email} helperText={errors.email?.message} sx={fieldSx} />
                      )} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Controller name="productInterested" control={control} render={({ field }) => (
                        <TextField {...field} select label="Product Interested In *" fullWidth error={!!errors.productInterested} helperText={errors.productInterested?.message} sx={fieldSx}>
                          {productOptions.map((o) => <MenuItem key={o} value={o} sx={{ fontFamily: "'Jost', sans-serif" }}>{o}</MenuItem>)}
                        </TextField>
                      )} />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller name="message" control={control} render={({ field }) => (
                        <TextField {...field} label="Your Message *" fullWidth multiline rows={5} error={!!errors.message} helperText={errors.message?.message} sx={fieldSx} />
                      )} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" disabled={isSubmitting} endIcon={<SendIcon />} sx={{
                        backgroundColor: BRAND.purple, color: "#FDFBFF",
                        px: 5, py: 1.8, fontSize: "0.78rem", letterSpacing: "0.16em",
                        "&:hover": { backgroundColor: BRAND.purpleDark, boxShadow: `0 8px 28px rgba(91,45,142,0.4)` },
                        "&:disabled": { backgroundColor: "rgba(91,45,142,0.4)" },
                      }}>
                        {isSubmitting ? "Sending…" : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
