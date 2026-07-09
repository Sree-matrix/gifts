import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getOrders, addOrder, type Order } from "@/lib/orders";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "paperboat-admin";

// Create a new order (from the product detail page)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, productName, category, priceLabel, size, images } = body;

    if (!productName || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Product and at least one photo are required" }, { status: 400 });
    }

    const order: Order = {
      id: randomUUID(),
      productId: productId || "",
      productName,
      category: category || "",
      priceLabel: priceLabel || "",
      size: size || "",
      images,
      createdAt: new Date().toISOString(),
    };

    await addOrder(order);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order save error:", err);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}

// List all orders (admin dashboard) — password protected
export async function GET(req: NextRequest) {
  const password =
    req.headers.get("x-admin-password") || req.nextUrl.searchParams.get("password");

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const orders = await getOrders();
  return NextResponse.json({ orders });
}
