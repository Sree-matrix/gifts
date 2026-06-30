export type ProductCategory = "frames" | "polaroids" | "albums" | "miniatures" | "magnets";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  sizes?: string[];
  materials?: string[];
  image: string;
  images: string[];
  badge?: string;
  popular?: boolean;
  new?: boolean;
  slug: string;
}

const UNSPLASH_FRAMES = [
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
  "https://images.unsplash.com/photo-1526566661780-1a67ea3c863e?w=800&q=80",
  "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
  "https://images.unsplash.com/photo-1499516085052-ad52a2af0c30?w=800&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
];

export const products: Product[] = [
  // ─── FRAMES (30+) ───────────────────────────────────────────────────────────
  {
    id: "f001", slug: "classic-wooden-frame", category: "frames",
    name: "Classic Wooden Frame", price: 699, priceLabel: "₹699",
    description: "Handcrafted from premium teak wood, this timeless frame brings warmth and elegance to any photograph. Perfect for portraits, wedding shots, and cherished family moments.",
    features: ["Premium teak wood", "Anti-glare glass", "Wall mount & desktop stand", "Custom size on request", "Satin finish"],
    sizes: ["4×6", "5×7", "8×10", "12×18"], materials: ["Teak Wood", "Anti-Glare Glass"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[1]], badge: "Bestseller", popular: true,
  },
  {
    id: "f002", slug: "premium-matte-frame", category: "frames",
    name: "Premium Matte Frame", price: 849, priceLabel: "₹849",
    description: "A sleek matte-finished frame that lets your photograph take center stage. Modern yet timeless, ideal for contemporary home décor.",
    features: ["Matte lacquer finish", "UV-protected glass", "Scratch-resistant back", "Portrait & landscape"],
    sizes: ["5×7", "8×10", "10×12", "12×16"], materials: ["MDF", "Matte Lacquer", "UV Glass"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[0]],
  },
  {
    id: "f003", slug: "wedding-collage-frame", category: "frames",
    name: "Wedding Collage Frame", price: 1499, priceLabel: "₹1,499",
    description: "Celebrate the most beautiful day with a multi-photo collage frame. Holds up to 9 photographs in an elegant wedding-themed layout.",
    features: ["Holds 6–9 photos", "Gold accent border", "Ivory mat board", "Personalized date engraving", "Gift box included"],
    sizes: ["16×20", "20×24"], materials: ["Solid Wood", "Gold Leaf Accent", "Ivory Mat"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[3]], badge: "Wedding Special", popular: true,
  },
  {
    id: "f004", slug: "couple-frame", category: "frames",
    name: "Couple Frame", price: 999, priceLabel: "₹999",
    description: "A romantic dual-photo frame for couples, perfect as anniversary and Valentine's gifts. Includes a love quote engraving of your choice.",
    features: ["Dual photo holder", "Custom love quote", "Heart emboss detail", "Gift wrapping"],
    sizes: ["8×10", "10×14"], materials: ["Walnut Wood", "Brass Accent"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[4]], popular: true,
  },
  {
    id: "f005", slug: "family-frame", category: "frames",
    name: "Family Portrait Frame", price: 1199, priceLabel: "₹1,199",
    description: "Celebrate every member of your family with this beautifully designed multi-aperture frame. A perfect housewarming or Diwali gift.",
    features: ["3–5 photo apertures", "Personalized family name", "Premium satin finish", "Includes gift box"],
    sizes: ["12×18", "16×20"], materials: ["Oak Wood", "Satin Finish"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[5]],
  },
  {
    id: "f006", slug: "anniversary-frame", category: "frames",
    name: "Anniversary Frame", price: 1299, priceLabel: "₹1,299",
    description: "Mark each year of love with this custom anniversary frame. Engraved with the year and a personalized message, it's a keepsake for life.",
    features: ["Year engraving", "Custom message", "Gold foil detail", "Velvet-lined back", "Certificate of authenticity"],
    sizes: ["8×10", "10×12"], materials: ["Mahogany", "Gold Foil"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[0]], badge: "Most Gifted",
  },
  {
    id: "f007", slug: "led-frame", category: "frames",
    name: "LED Glow Frame", price: 1899, priceLabel: "₹1,899",
    description: "A mesmerizing LED-backlit frame that turns your photograph into a glowing piece of art. Perfect for bedroom displays and romantic setups.",
    features: ["Warm LED backlight", "USB powered", "3 brightness levels", "Remote control", "Acrylic panel"],
    sizes: ["5×7", "8×10", "10×12"], materials: ["Acrylic", "LED Strip", "Aluminum Trim"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[2]], badge: "New", new: true, popular: true,
  },
  {
    id: "f008", slug: "floating-frame", category: "frames",
    name: "Floating Frame", price: 1099, priceLabel: "₹1,099",
    description: "Create the illusion of a photograph floating in mid-air with our premium floating frame. Minimalist, modern, and stunning.",
    features: ["Shadow box design", "Invisible mount hardware", "Anti-glare glass", "Canvas or print compatible"],
    sizes: ["6×8", "8×10", "12×16"], materials: ["Brushed Metal", "Anti-glare Glass"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[3]], new: true,
  },
  {
    id: "f009", slug: "rustic-barnwood-frame", category: "frames",
    name: "Rustic Barnwood Frame", price: 799, priceLabel: "₹799",
    description: "Reclaimed barnwood gives this frame an authentic, lived-in texture that complements vintage and candid photography perfectly.",
    features: ["Reclaimed wood", "Distressed finish", "Rustic charm", "Available in natural & grey"],
    sizes: ["4×6", "5×7", "8×10"], materials: ["Reclaimed Wood"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[0]],
  },
  {
    id: "f010", slug: "black-elegance-frame", category: "frames",
    name: "Black Elegance Frame", price: 749, priceLabel: "₹749",
    description: "Timeless matte black frame with a gold inner bevel. Simple, bold, and perfect for monochrome photography.",
    features: ["Matte black finish", "Gold inner bevel", "Museum-quality glass", "Multiple sizes"],
    sizes: ["4×6", "5×7", "8×10", "11×14"], materials: ["MDF", "Matte Black", "Gold Bevel"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[5]], popular: true,
  },
  {
    id: "f011", slug: "shadow-box-frame", category: "frames",
    name: "Memory Shadow Box", price: 1699, priceLabel: "₹1,699",
    description: "A deep shadow box frame for preserving 3D mementos alongside photographs — wedding invitations, dried flowers, ticket stubs, and more.",
    features: ["3-inch deep box", "Removable backing", "Holds 3D items", "Magnetic closure", "Archival safe"],
    sizes: ["12×12", "12×16", "16×20"], materials: ["Solid Wood", "Museum Glass"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[0]],
  },
  {
    id: "f012", slug: "gold-ornate-frame", category: "frames",
    name: "Gold Ornate Frame", price: 1399, priceLabel: "₹1,399",
    description: "Inspired by European baroque styling, this ornate gold frame adds grandeur to any portrait. A showstopper for formal photography.",
    features: ["Resin-cast ornate border", "24K gold leaf finish", "Velvet backing", "Royal gift wrapping"],
    sizes: ["8×10", "11×14", "16×20"], materials: ["Resin", "Gold Leaf"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[1]], badge: "Premium",
  },
  {
    id: "f013", slug: "bamboo-eco-frame", category: "frames",
    name: "Bamboo Eco Frame", price: 649, priceLabel: "₹649",
    description: "Sustainably sourced bamboo frame with natural grain patterns. Eco-conscious gifting that's beautiful and responsible.",
    features: ["100% bamboo", "Eco-friendly finish", "Lightweight", "Biodegradable packaging"],
    sizes: ["4×6", "5×7", "8×10"], materials: ["Natural Bamboo"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[4]],
  },
  {
    id: "f014", slug: "hexagon-frame", category: "frames",
    name: "Hexagon Art Frame", price: 899, priceLabel: "₹899",
    description: "A contemporary hexagonal frame that transforms any wall into a gallery. Available in sets for a honeycomb display arrangement.",
    features: ["Geometric design", "Wall cluster sets", "Lightweight", "Easy installation kit"],
    sizes: ["6\" hex", "8\" hex"], materials: ["MDF", "White Lacquer"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[2]], new: true,
  },
  {
    id: "f015", slug: "vintage-silver-frame", category: "frames",
    name: "Vintage Silver Frame", price: 949, priceLabel: "₹949",
    description: "Antique-finish silver frame with intricate filigree detailing. Perfect for grandmother gifts and heritage portraits.",
    features: ["Antique silver finish", "Filigree border", "Velvet stand back", "Tarnish-resistant"],
    sizes: ["4×6", "5×7", "8×10"], materials: ["Zinc Alloy", "Antique Silver"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[5]],
  },
  {
    id: "f016", slug: "panoramic-landscape-frame", category: "frames",
    name: "Panoramic Landscape Frame", price: 1099, priceLabel: "₹1,099",
    description: "Wide-format frame designed for landscape and panoramic photographs. Ideal for travel memories and scenic wedding venues.",
    features: ["Wide panoramic format", "Anti-reflective glass", "Horizontal only", "Gallery-quality print option"],
    sizes: ["10×20", "12×24", "12×36"], materials: ["Walnut Wood", "Anti-Reflective Glass"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[0]],
  },
  {
    id: "f017", slug: "rope-hanging-frame", category: "frames",
    name: "Rope Hanging Frame Set", price: 1249, priceLabel: "₹1,249",
    description: "Set of 3 hanging frames connected with natural jute rope. A boho-chic display perfect for living rooms and nurseries.",
    features: ["Set of 3 frames", "Natural jute rope", "Boho aesthetic", "Easy hanging kit"],
    sizes: ["4×6 each"], materials: ["Pine Wood", "Jute Rope"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[1]], popular: true,
  },
  {
    id: "f018", slug: "ceramic-tile-frame", category: "frames",
    name: "Ceramic Tile Frame", price: 799, priceLabel: "₹799",
    description: "Photo printed directly on a glazed ceramic tile, framed in solid wood. Waterproof, fade-proof, and uniquely artistic.",
    features: ["Direct ceramic print", "Waterproof surface", "Fade-proof for 20+ years", "Kiln-fired glaze"],
    sizes: ["4×4", "6×6", "8×8"], materials: ["Glazed Ceramic", "Pine Wood"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[3]], new: true,
  },
  {
    id: "f019", slug: "canvas-stretch-frame", category: "frames",
    name: "Canvas Gallery Wrap", price: 1599, priceLabel: "₹1,599",
    description: "Your photograph printed on premium artist canvas and gallery-wrapped on a solid stretcher frame. Ready to hang, ready to impress.",
    features: ["Artist-grade canvas", "300 GSM heavyweight", "Gallery wrap edges", "Ready to hang", "Color-matched edges"],
    sizes: ["8×10", "12×16", "16×20", "20×30"], materials: ["Artist Canvas", "Pine Stretcher"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[3]], badge: "Gallery Quality",
  },
  {
    id: "f020", slug: "acrylic-float-mount", category: "frames",
    name: "Acrylic Float Mount", price: 1799, priceLabel: "₹1,799",
    description: "Photo face-mounted between premium optical acrylic for razor-sharp clarity and a frameless, modern gallery look.",
    features: ["Optical-grade acrylic", "Face-mount process", "Frameless aesthetic", "Standoff hardware", "Brilliant color depth"],
    sizes: ["8×10", "10×12", "16×20", "20×24"], materials: ["Optical Acrylic"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[4]], badge: "Ultra Premium", popular: true,
  },
  {
    id: "f021", slug: "wooden-multi-circle-frame", category: "frames",
    name: "Wooden Circle Frame Set", price: 1349, priceLabel: "₹1,349",
    description: "A set of 5 hand-cut circular wooden frames in various sizes. Create a stunning circular gallery wall arrangement.",
    features: ["Set of 5 circles", "Sanded smooth edges", "Various diameters", "Easy mounting", "Natural wood or painted"],
    sizes: ["4\", 5\", 6\", 7\", 8\" diameter"], materials: ["Birch Wood"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[0]], new: true,
  },
  {
    id: "f022", slug: "personalized-birth-frame", category: "frames",
    name: "New Arrival Birth Frame", price: 1099, priceLabel: "₹1,099",
    description: "Celebrate a new baby with this personalized birth announcement frame engraved with name, birth date, weight, and height.",
    features: ["Baby name engraving", "Birth stats engraved", "Pastel color options", "Gender-neutral design", "Gift-ready"],
    sizes: ["5×7", "8×10"], materials: ["MDF", "Pastel Lacquer"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[5]], popular: true,
  },
  {
    id: "f023", slug: "starmap-frame", category: "frames",
    name: "Star Map Frame", price: 1499, priceLabel: "₹1,499",
    description: "The exact night sky on your special date — wedding night, first date, anniversary — beautifully printed and framed.",
    features: ["Accurate astronomical map", "Custom date & location", "Gold constellation print", "Premium matte paper"],
    sizes: ["8×10", "12×16"], materials: ["Archival Matte Print", "Black Frame"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[0]], badge: "Unique", popular: true,
  },
  {
    id: "f024", slug: "map-print-frame", category: "frames",
    name: "Map Print Frame", price: 1299, priceLabel: "₹1,299",
    description: "Custom illustrated map of your special place — where you met, where you married — printed in watercolor style and framed beautifully.",
    features: ["Watercolor map illustration", "Custom location", "Custom title & date", "Archival print"],
    sizes: ["8×10", "12×16", "16×20"], materials: ["Archival Watercolor Print", "Oak Frame"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[1]],
  },
  {
    id: "f025", slug: "fingerprint-tree-frame", category: "frames",
    name: "Fingerprint Tree Frame", price: 1199, priceLabel: "₹1,199",
    description: "A decorative frame with a printed fingerprint tree, where guests sign their thumbprints at weddings. A timeless memory keeper.",
    features: ["Fingerprint tree print", "Ink pad included", "Space for 50+ prints", "Personalized names & date"],
    sizes: ["12×16", "16×20"], materials: ["Archival Print", "White Frame"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[2]],
  },
  {
    id: "f026", slug: "metal-tabletop-frame", category: "frames",
    name: "Metal Tabletop Frame", price: 599, priceLabel: "₹599",
    description: "Sleek brushed metal tabletop frame, compact and minimal. Perfect for desks, bedside tables, and office spaces.",
    features: ["Brushed metal finish", "Tabletop easel back", "Slim profile", "Horizontal & vertical"],
    sizes: ["3×4", "4×6", "5×7"], materials: ["Brushed Aluminum"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[3]],
  },
  {
    id: "f027", slug: "diptych-frame", category: "frames",
    name: "Diptych Side-by-Side Frame", price: 1149, priceLabel: "₹1,149",
    description: "Two frames hinged together to tell a two-part story — before and after, then and now, you and me.",
    features: ["Hinged double frame", "Matching wood finish", "Custom message option", "Freestanding"],
    sizes: ["2×(5×7)", "2×(6×8)"], materials: ["Walnut Wood", "Brass Hinge"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[4]],
  },
  {
    id: "f028", slug: "triptych-frame", category: "frames",
    name: "Triptych Three-Panel Frame", price: 1599, priceLabel: "₹1,599",
    description: "Three hinged panels that unfold to display a triptych of photographs. Perfect for capturing a story arc or wedding day sequence.",
    features: ["3-panel hinged design", "Freestanding or wall mount", "Full bleed printing", "Personalization available"],
    sizes: ["3×(5×7)", "3×(6×8)"], materials: ["Solid Walnut"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[5]],
  },
  {
    id: "f029", slug: "locket-photo-frame", category: "frames",
    name: "Locket-Style Mini Frame", price: 499, priceLabel: "₹499",
    description: "A tiny keepsake locket-style frame for wallet-sized photos. A charming, intimate gift that carries memories close.",
    features: ["Wallet/purse size", "Magnetic closure", "Gold or silver finish", "Mini velvet pouch"],
    sizes: ["2×3"], materials: ["Zinc Alloy", "Gold/Silver Plating"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[0]],
  },
  {
    id: "f030", slug: "digital-photo-frame", category: "frames",
    name: "Digital Smart Frame", price: 3999, priceLabel: "₹3,999",
    description: "A premium 10-inch WiFi-enabled digital frame that streams your memories in a continuous slideshow. The gift that keeps giving.",
    features: ["10-inch IPS display", "WiFi photo streaming", "App-controlled", "Motion sensor sleep", "Premium wood surround"],
    sizes: ["10\" display"], materials: ["Wood Surround", "IPS Display"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[2]], badge: "Premium", new: true,
  },
  {
    id: "f031", slug: "quote-frame", category: "frames",
    name: "Custom Quote Frame", price: 899, priceLabel: "₹899",
    description: "A beautiful typographic frame with your favourite quote or wedding vows printed in elegant calligraphy alongside your photograph.",
    features: ["Calligraphy quote print", "Photo insert", "Archival ink", "Custom font selection"],
    sizes: ["8×10", "11×14"], materials: ["Archival Print", "White/Black Frame"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[1]],
  },

  // ─── POLAROIDS ───────────────────────────────────────────────────────────────
  {
    id: "p001", slug: "mini-polaroid-set", category: "polaroids",
    name: "Mini Polaroid Set", price: 599, priceLabel: "₹599",
    description: "A set of 10 vintage-style mini polaroid prints from your digital photos. Perfect for gifting, wall decorating, and memory jars.",
    features: ["10 prints per set", "Genuine Polaroid size (3×4\")", "Write-on white border", "Matte or glossy finish", "Delivered in kraft envelope"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[3]], popular: true, badge: "Bestseller",
    sizes: ["3×4 mini"], materials: ["Photo Paper"],
  },
  {
    id: "p002", slug: "wedding-polaroid-set", category: "polaroids",
    name: "Wedding Polaroid Set", price: 1499, priceLabel: "₹1,499",
    description: "25 wedding-day polaroid prints curated from your photographer's gallery. Perfect for welcome tables, seating cards, and thank-you gifts.",
    features: ["25 curated prints", "Wedding border templates", "Date & names on back", "Linen gift box"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[5]], popular: true,
    sizes: ["3×4", "4×6"], materials: ["Photo Paper"],
  },
  {
    id: "p003", slug: "travel-polaroid-pack", category: "polaroids",
    name: "Travel Memory Pack", price: 799, priceLabel: "₹799",
    description: "Turn your travel adventures into a polaroid travel journal. 15 prints with location labels and a custom cover.",
    features: ["15 prints", "Location labels", "Twine string clips included", "Custom cover print"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[0]],
    sizes: ["3×4"], materials: ["Photo Paper"],
  },
  {
    id: "p004", slug: "polaroid-fridge-strips", category: "polaroids",
    name: "Fridge Polaroid Strips", price: 449, priceLabel: "₹449",
    description: "Magnetic-backed polaroid strips for your fridge. 8 prints with magnetic backs — brighten your kitchen every morning.",
    features: ["8 magnetic prints", "Glossy finish", "Strong magnet backing", "Custom captions"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[1]], new: true,
    sizes: ["2×3 strip"], materials: ["Photo Paper", "Magnet Backing"],
  },
  {
    id: "p005", slug: "polaroid-birthday-bundle", category: "polaroids",
    name: "Birthday Memory Bundle", price: 999, priceLabel: "₹999",
    description: "A curated polaroid bundle for birthday celebrations — 20 prints, a custom banner, and a twine display string.",
    features: ["20 polaroid prints", "Custom name banner", "3m twine + clips", "Pastel colour options"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[2]],
    sizes: ["3×4"], materials: ["Photo Paper"],
  },

  // ─── ALBUMS ──────────────────────────────────────────────────────────────────
  {
    id: "a001", slug: "wedding-album-premium", category: "albums",
    name: "Premium Wedding Album", price: 4999, priceLabel: "₹4,999",
    description: "A heirloom-quality lay-flat album that tells your complete wedding story. Flush mount printing with a genuine leather cover.",
    features: ["30–60 pages lay-flat", "Genuine leather cover", "Flush mount pages", "Gold foil title", "Archival safe for 100+ years", "Boxed presentation"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[2]], badge: "Signature", popular: true,
    sizes: ["10×10", "12×12", "14×14"], materials: ["Genuine Leather", "Lay-Flat Pages"],
  },
  {
    id: "a002", slug: "couple-album", category: "albums",
    name: "Couple Story Album", price: 2499, priceLabel: "₹2,499",
    description: "From the first date to today — a beautifully designed photo book narrating your love story with custom captions and timeline design.",
    features: ["20–40 pages", "Custom captions", "Timeline layout", "Linen or leatherette cover", "Free digital backup"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[4]],
    sizes: ["8×8", "10×10"], materials: ["Linen Cover", "Photo Book Pages"],
  },
  {
    id: "a003", slug: "premium-photo-book", category: "albums",
    name: "Premium Photo Book", price: 1299, priceLabel: "₹1,299",
    description: "A professional photo book with magazine-style layout and 200 GSM premium pages. Ideal for events, travel, and family portraits.",
    features: ["24–48 pages", "200 GSM matte pages", "Softcover or hardcover", "Professional layout design"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[5]],
    sizes: ["8×8", "8×10", "11×8.5"], materials: ["Photo Book Paper"],
  },
  {
    id: "a004", slug: "baby-milestone-album", category: "albums",
    name: "Baby Milestone Album", price: 1899, priceLabel: "₹1,899",
    description: "Document every milestone of your little one's first year in this adorable and beautifully illustrated photo album.",
    features: ["12 monthly milestone spreads", "Illustrated borders", "Write-in captions", "Soft padded cover"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[0]], popular: true,
    sizes: ["10×10"], materials: ["Soft Padded Cover", "Photo Pages"],
  },
  {
    id: "a005", slug: "travel-journal-album", category: "albums",
    name: "Travel Journal Album", price: 1499, priceLabel: "₹1,499",
    description: "Half photo book, half journal — document every destination with photos, journaled notes, and map stickers.",
    features: ["20 spreads", "Journaling sections", "Map pocket pages", "Craft paper aesthetic"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[1]],
    sizes: ["8×10"], materials: ["Kraft Cover", "Mixed Pages"],
  },

  // ─── MINIATURES ──────────────────────────────────────────────────────────────
  {
    id: "m001", slug: "couple-miniature", category: "miniatures",
    name: "Couple Caricature Miniature", price: 1799, priceLabel: "₹1,799",
    description: "Hand-illustrated caricature miniatures of you and your partner, custom-crafted from your photos. Desk-sized and entirely one-of-a-kind.",
    features: ["Hand-illustrated", "Based on your photos", "Ceramic base", "Personalized name tag", "Gift box"],
    image: UNSPLASH_FRAMES[0], images: [UNSPLASH_FRAMES[0], UNSPLASH_FRAMES[3]], badge: "Handmade", popular: true,
    sizes: ["4–5\" tall"], materials: ["Resin", "Hand Paint"],
  },
  {
    id: "m002", slug: "family-miniature", category: "miniatures",
    name: "Family Portrait Miniature", price: 2499, priceLabel: "₹2,499",
    description: "Your entire family — pets included — captured as a charming miniature illustration in a keepsake box.",
    features: ["Up to 5 members", "Pet-friendly", "Detailed painting", "Keepsake presentation box"],
    image: UNSPLASH_FRAMES[1], images: [UNSPLASH_FRAMES[1], UNSPLASH_FRAMES[2]],
    sizes: ["5–6\" group"], materials: ["Resin", "Hand Paint"],
  },
  {
    id: "m003", slug: "wedding-miniature", category: "miniatures",
    name: "Wedding Couple Miniature", price: 1999, priceLabel: "₹1,999",
    description: "A breathtaking miniature of the wedding couple in their exact wedding attire. A cherished keepsake for every anniversary.",
    features: ["Wedding attire recreation", "Gold-accented base", "Customized poses", "Engraved wedding date", "Velvet-lined box"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[5]], badge: "Couple Favourite",
    sizes: ["4–5\" tall"], materials: ["Resin", "Hand Paint", "Gold Accent"],
  },
  {
    id: "m004", slug: "baby-miniature", category: "miniatures",
    name: "Baby Keepsake Miniature", price: 1599, priceLabel: "₹1,599",
    description: "A tiny, precious replica of your newborn or toddler — an unforgettable gift for parents and grandparents.",
    features: ["Newborn-safe design", "Pastel colour options", "Age-accurate details", "Personalised name"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[0]], new: true,
    sizes: ["3–4\" tall"], materials: ["Resin", "Hand Paint"],
  },

  // ─── MAGNETS ─────────────────────────────────────────────────────────────────
  {
    id: "mg001", slug: "square-photo-magnet", category: "magnets",
    name: "Square Photo Magnet", price: 199, priceLabel: "₹199",
    description: "Your favourite photo on a premium quality fridge magnet. Vibrant colours, strong magnet, durable surface.",
    features: ["Glossy or matte finish", "Strong neodymium magnet", "Scratch-resistant laminate", "Set of 4 or 8"],
    image: UNSPLASH_FRAMES[4], images: [UNSPLASH_FRAMES[4], UNSPLASH_FRAMES[1]], popular: true,
    sizes: ["2×2", "3×3", "4×4"], materials: ["Photo Print", "Neodymium Magnet"],
  },
  {
    id: "mg002", slug: "circular-photo-magnet", category: "magnets",
    name: "Circular Photo Magnet", price: 249, priceLabel: "₹249",
    description: "Circular die-cut photo magnets in various sizes. A sweet, modern fridge decoration for couples and families.",
    features: ["Circle die-cut", "High-res print", "Strong backing", "Set of 4"],
    image: UNSPLASH_FRAMES[5], images: [UNSPLASH_FRAMES[5], UNSPLASH_FRAMES[0]],
    sizes: ["2\" circle", "3\" circle"], materials: ["Photo Print", "Magnet Backing"],
  },
  {
    id: "mg003", slug: "wedding-magnet-set", category: "magnets",
    name: "Wedding Favour Magnet Set", price: 799, priceLabel: "₹799 for 20",
    description: "Personalized wedding favour magnets — elegant, affordable, and remembered long after the celebration ends.",
    features: ["20 magnets per set", "Custom wedding photo", "Names & date printed", "Kraft envelope packaging"],
    image: UNSPLASH_FRAMES[2], images: [UNSPLASH_FRAMES[2], UNSPLASH_FRAMES[4]], badge: "Bulk Orders Welcome",
    sizes: ["2×3"], materials: ["Photo Print", "Magnet Backing"],
  },
  {
    id: "mg004", slug: "heart-magnet", category: "magnets",
    name: "Heart-Shape Photo Magnet", price: 279, priceLabel: "₹279",
    description: "Heart-shaped photo magnets — a romantic gift that brings smiles every time you open the fridge.",
    features: ["Heart die-cut", "Glossy finish", "Strong backing", "Set of 2"],
    image: UNSPLASH_FRAMES[3], images: [UNSPLASH_FRAMES[3], UNSPLASH_FRAMES[1]], new: true,
    sizes: ["3\" heart"], materials: ["Photo Print", "Magnet"],
  },
];

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.popular).slice(0, 8);

export const getCategoryMeta = (cat: ProductCategory) => {
  const map = {
    frames: { label: "Photo Frames", plural: "Frames", icon: "🖼️", description: "Premium handcrafted photo frames for every memory" },
    polaroids: { label: "Polaroid Prints", plural: "Polaroids", icon: "📸", description: "Vintage-style polaroid prints from your digital photos" },
    albums: { label: "Photo Albums", plural: "Albums", icon: "📖", description: "Heirloom-quality photo albums and books" },
    miniatures: { label: "Miniatures", plural: "Miniatures", icon: "🎭", description: "Hand-illustrated caricature miniatures" },
    magnets: { label: "Fridge Magnets", plural: "Magnets", icon: "🧲", description: "Custom photo fridge magnets" },
  };
  return map[cat];
};
