"use client";
import { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button, MenuItem, Stepper, Step, StepLabel, LinearProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { BRAND } from "@/lib/theme";
import { products } from "@/lib/products";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const schema = z.object({
  name:          z.string().min(2, "Enter your name"),
  phone:         z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile"),
  email:         z.string().email("Enter valid email"),
  productId:     z.string().min(1, "Select a product"),
  size:          z.string().optional(),
  customization: z.string().optional(),
  quantity:      z.number().min(1).max(100),
  message:       z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const steps = ["Choose Product", "Your Details", "Upload & Submit"];

export default function OrderPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", productId: "", size: "", customization: "", quantity: 1, message: "" },
  });

  const selectedProductId = watch("productId");
  const selectedProduct   = products.find((p) => p.id === selectedProductId);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setUploadedFiles(Array.from(e.target.files));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Build WhatsApp message
      const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
      const product = products.find((p) => p.id === data.productId);
      const msg = encodeURIComponent(
        `Hello Paperboat Gifts! 🎁\n\n*New Order Request*\n\n` +
        `*Product:* ${product?.name ?? data.productId}\n` +
        `*Size:* ${data.size || "To discuss"}\n` +
        `*Quantity:* ${data.quantity}\n` +
        `*Customization:* ${data.customization || "None specified"}\n\n` +
        `*Customer Details:*\n` +
        `*Name:* ${data.name}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Email:* ${data.email}\n\n` +
        `*Message:* ${data.message || "—"}\n\n` +
        `Photos will be shared after connecting. Thank you!`
      );
      toast.success("Redirecting to WhatsApp to complete your order! 🎉");
      setTimeout(() => window.open(`https://wa.me/${wa}?text=${msg}`, "_blank"), 800);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root":   { borderRadius: 0 },
    "& .MuiInputLabel-root":      { fontFamily: "'Jost', sans-serif", fontWeight: 300 },
    "& .MuiOutlinedInput-input":  { fontFamily: "'Jost', sans-serif", fontWeight: 300 },
  };

  return (
    <Box sx={{ pt: 12, pb: 12, minHeight: "100vh", backgroundColor: BRAND.purpleGhost }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.68rem", color: BRAND.gold, mb: 2 }}>
            Place an Order
          </Typography>
          <Typography variant="h1" sx={{ color: BRAND.charcoal, fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}>
            Order Your Keepsake
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: BRAND.grey, fontSize: "1.1rem" }}>
            Fill in the details below and we'll take care of the rest.
          </Typography>
        </Box>

        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{
                "& .MuiStepLabel-label": { fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.8rem" },
                "& .MuiStepIcon-root.Mui-active": { color: BRAND.purple },
                "& .MuiStepIcon-root.Mui-completed": { color: BRAND.purple },
              }}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ backgroundColor: "#FDFBFF", border: `1px solid rgba(91,45,142,0.1)`, p: { xs: 3, md: 5 } }}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2.5}>
              {/* Step 1: Product */}
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: BRAND.charcoal, mb: 2.5 }}>
                  1. Choose Your Product
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Controller name="productId" control={control} render={({ field }) => (
                  <TextField {...field} select label="Select Product *" fullWidth error={!!errors.productId} helperText={errors.productId?.message} sx={fieldSx}>
                    {products.map((p) => (
                      <MenuItem key={p.id} value={p.id} sx={{ fontFamily: "'Jost', sans-serif" }}>
                        {p.name} — {p.priceLabel} ({p.category})
                      </MenuItem>
                    ))}
                  </TextField>
                )} />
              </Grid>

              {selectedProduct?.sizes && (
                <Grid item xs={12} sm={6}>
                  <Controller name="size" control={control} render={({ field }) => (
                    <TextField {...field} select label="Select Size" fullWidth sx={fieldSx}>
                      <MenuItem value="">To discuss</MenuItem>
                      {selectedProduct.sizes!.map((s) => <MenuItem key={s} value={s} sx={{ fontFamily: "'Jost', sans-serif" }}>{s}</MenuItem>)}
                    </TextField>
                  )} />
                </Grid>
              )}

              <Grid item xs={12} sm={6}>
                <Controller name="quantity" control={control} render={({ field }) => (
                  <TextField {...field} label="Quantity *" type="number" fullWidth error={!!errors.quantity} helperText={errors.quantity?.message} inputProps={{ min: 1, max: 100 }} onChange={(e) => field.onChange(Number(e.target.value))} sx={fieldSx} />
                )} />
              </Grid>

              <Grid item xs={12}>
                <Controller name="customization" control={control} render={({ field }) => (
                  <TextField {...field} label="Customization Details (names, dates, messages, colours…)" fullWidth multiline rows={3} sx={fieldSx} />
                )} />
              </Grid>

              {/* Step 2: Details */}
              <Grid item xs={12}>
                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: BRAND.charcoal, mb: 2.5 }}>
                    2. Your Details
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller name="name" control={control} render={({ field }) => (
                  <TextField {...field} label="Full Name *" fullWidth error={!!errors.name} helperText={errors.name?.message} sx={fieldSx} />
                )} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller name="phone" control={control} render={({ field }) => (
                  <TextField {...field} label="WhatsApp / Phone *" fullWidth error={!!errors.phone} helperText={errors.phone?.message} inputProps={{ maxLength: 10 }} sx={fieldSx} />
                )} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller name="email" control={control} render={({ field }) => (
                  <TextField {...field} label="Email Address *" fullWidth error={!!errors.email} helperText={errors.email?.message} sx={fieldSx} />
                )} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller name="message" control={control} render={({ field }) => (
                  <TextField {...field} label="Additional Notes" fullWidth sx={fieldSx} />
                )} />
              </Grid>

              {/* Step 3: Upload */}
              <Grid item xs={12}>
                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: BRAND.charcoal, mb: 1 }}>
                    3. Upload Your Photos
                  </Typography>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: BRAND.grey, mb: 2 }}>
                    You can also share photos via WhatsApp after submitting — high-res photos produce the best results.
                  </Typography>
                  <Box
                    component="label"
                    htmlFor="photo-upload"
                    sx={{
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      border: `2px dashed rgba(91,45,142,0.25)`, p: 5, cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": { borderColor: BRAND.purple, backgroundColor: BRAND.purplePale },
                    }}
                  >
                    <CloudUploadIcon sx={{ fontSize: 40, color: BRAND.purple, mb: 1.5, opacity: 0.6 }} />
                    <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: BRAND.purple }}>
                      Click to upload photos
                    </Typography>
                    <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.75rem", color: BRAND.grey, mt: 0.5 }}>
                      JPG, PNG, HEIC — up to 20 MB each
                    </Typography>
                    {uploadedFiles.length > 0 && (
                      <Box sx={{ mt: 2, p: 1.5, backgroundColor: BRAND.purplePale, borderRadius: 0 }}>
                        <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: BRAND.purple, fontWeight: 500 }}>
                          ✅ {uploadedFiles.length} file{uploadedFiles.length > 1 ? "s" : ""} selected
                        </Typography>
                      </Box>
                    )}
                    <input id="photo-upload" type="file" accept="image/*" multiple hidden onChange={handleFileChange} />
                  </Box>
                </Box>
              </Grid>

              {/* Submit */}
              <Grid item xs={12}>
                <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button type="submit" variant="contained" disabled={isSubmitting} startIcon={<WhatsAppIcon />} sx={{
                    backgroundColor: BRAND.purple, color: "#FDFBFF",
                    py: 2, fontSize: "0.8rem", letterSpacing: "0.16em",
                    "&:hover": { backgroundColor: BRAND.purpleDark, boxShadow: `0 8px 28px rgba(91,45,142,0.45)` },
                    "&:disabled": { backgroundColor: "rgba(91,45,142,0.4)" },
                  }}>
                    {isSubmitting ? "Processing…" : "Submit Order via WhatsApp"}
                  </Button>
                  <Typography sx={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.76rem", color: BRAND.grey, textAlign: "center" }}>
                    Submitting opens WhatsApp with your order details pre-filled. We'll confirm within 2 hours.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
