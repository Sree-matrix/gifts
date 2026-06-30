export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  image: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya & Arjun Nair",
    location: "Chennai",
    rating: 5,
    text: "We ordered the wedding collage frame for our first anniversary and it arrived perfectly packaged. The quality of the wood, the precision of the engraving — everything exceeded our expectations. We've since gifted three more frames to family members. Paper Boat Frames is now our go-to for every special occasion.",
    product: "Wedding Collage Frame",
    image: "https://images.unsplash.com/photo-1529417305485-480f579e7578?w=200&q=80",
    date: "March 2025",
  },
  {
    id: "t2",
    name: "Kavitha Krishnamurthy",
    location: "Bangalore",
    rating: 5,
    text: "Ordered the acrylic float mount of my daughter's first birthday portrait and I couldn't be happier. The colors are so vibrant, the clarity is incredible. Everyone who walks into my living room asks about it. Worth every rupee.",
    product: "Acrylic Float Mount",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    date: "January 2025",
  },
  {
    id: "t3",
    name: "Ramesh & Sudha Venkataraman",
    location: "Coimbatore",
    rating: 5,
    text: "The premium wedding album is absolutely breathtaking. We handed over our photographer's gallery on a Monday and had the finished album by Saturday. The lay-flat binding, the leather cover, the gold foil title — it looks exactly like something you'd find in a high-end studio. We will treasure this forever.",
    product: "Premium Wedding Album",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    date: "February 2025",
  },
  {
    id: "t4",
    name: "Deepika Srinivasan",
    location: "Mumbai",
    rating: 5,
    text: "I gifted the couple miniature to my best friend on her wedding day and she literally cried happy tears. The detail on the wedding outfits was astonishing — they even got the colour of the saree exactly right. Incredibly skilled artisans.",
    product: "Wedding Couple Miniature",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    date: "April 2025",
  },
  {
    id: "t5",
    name: "Arun Chandrasekaran",
    location: "Hyderabad",
    rating: 5,
    text: "Five-star service from start to finish. The polaroid set I ordered for my parents' 30th anniversary dinner was the hit of the evening. Guests were taking them as keepsakes. The packaging alone was so beautiful that my mother kept the box.",
    product: "Mini Polaroid Set",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    date: "May 2025",
  },
  {
    id: "t6",
    name: "Meera Raghunathan",
    location: "Trichy",
    rating: 5,
    text: "I was skeptical about ordering a digital frame but the Paper Boat Smart Frame has transformed my living room. The photos shuffle beautifully, the wood surround is premium, and setting it up through the app took under 5 minutes. My elderly parents love seeing new photos every week.",
    product: "Digital Smart Frame",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    date: "March 2025",
  },
  {
    id: "t7",
    name: "Senthil Kumar",
    location: "Madurai",
    rating: 5,
    text: "Ordered 50 wedding favour magnets for our reception and they were perfect. Each one had our wedding photo, our names, and date printed crisply. Guests loved them. The price point for bulk orders is very fair. Will definitely order again for every event.",
    product: "Wedding Favour Magnet Set",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    date: "June 2025",
  },
  {
    id: "t8",
    name: "Nithya & Karthik",
    location: "Pondicherry",
    rating: 5,
    text: "The star map frame was such a unique and thoughtful gift for our second anniversary. The exact night sky from our wedding night, with our names and venue engraved below. My husband was speechless. This is the most meaningful gift I've ever given.",
    product: "Star Map Frame",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    date: "July 2025",
  },
];
