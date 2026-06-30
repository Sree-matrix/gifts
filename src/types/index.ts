export interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  productId: string;
  productName: string;
  size?: string;
  customization?: string;
  quantity: number;
  message?: string;
  imageUrls?: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  productInterested: string;
  message: string;
}

export interface FirestoreOrder {
  id?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  productId: string;
  productName: string;
  size: string;
  customization: string;
  quantity: number;
  message: string;
  imageUrls: string[];
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: Date;
  whatsappSent: boolean;
}
