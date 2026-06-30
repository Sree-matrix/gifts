import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://frames.paperboatphotography.in"),
  title: {
    default: "Paperboat Gifts & Forever Moments — Premium Photo Frames Chennai",
    template: "%s | Paperboat Gifts & Forever Moments",
  },
  description:
    "Premium photo frames, personalized gifts, polaroid prints, wedding albums & miniatures. Handcrafted in Chennai. Preserve your forever moments beautifully.",
  keywords: [
    "photo frames Chennai", "custom photo frames", "wedding frames",
    "personalized gifts Chennai", "polaroid prints", "photo albums Chennai",
    "premium photo frames", "paperboat gifts", "forever moments",
    "anniversary gifts", "couple frames", "memory frames",
  ],
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://frames.paperboatphotography.in",
    siteName: "Paperboat Gifts & Forever Moments",
    title: "Paperboat Gifts & Forever Moments — Preserve Your Most Beautiful Memories",
    description: "Premium handcrafted photo frames, polaroid prints, personalized albums & gifts. Made with love in Chennai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Paperboat Gifts & Forever Moments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paperboat Gifts & Forever Moments — Premium Photo Frames Chennai",
    description: "Luxury photo frames, wedding albums, polaroids & personalized gifts. Made with love.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { margin: 0; background-color: #FDFCFF; }
          ::selection { background: rgba(75,45,143,0.2); color: #1E1433; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #F8F5FF; }
          ::-webkit-scrollbar-thumb { background: #4B2D8F; border-radius: 0; }
        `}</style>
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
