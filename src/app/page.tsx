import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CategoryStrip from "@/components/sections/CategoryStrip";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Paperboat Gifts & Forever Moments — Premium Photo Frames Chennai",
  description:
    "Luxury handcrafted photo frames, polaroid prints, wedding albums, miniatures & personalized gifts. Made with love in Chennai. Turn your memories into timeless keepsakes.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <CategoryStrip />
      <FeaturedProducts />
      <ProcessSection />
      <TestimonialsSection limit={4} />
      <FAQSection />
      <CTASection />
    </>
  );
}
