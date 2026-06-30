import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      customerName, customerPhone, customerEmail,
      productName, size, quantity, customization,
      message, imageUrls = [],
    } = body;

    // ── Nodemailer transport ──────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const imageLinksHtml = imageUrls.length
      ? imageUrls
          .map((url: string, i: number) => `<a href="${url}" style="color:#5B2D8E;">Photo ${i + 1}</a>`)
          .join(" &nbsp;|&nbsp; ")
      : "<em style='color:#9B93A8;'>No photos uploaded</em>";

    await transporter.sendMail({
      from: `"Paperboat Gifts Orders" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: customerEmail,
      subject: `🎁 New Order — ${productName} from ${customerName}`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:620px;margin:0 auto;background:#FDFBFF;border:1px solid rgba(91,45,142,0.15);">
          <div style="background:linear-gradient(135deg,#5B2D8E,#3D1D63);padding:32px;text-align:center;">
            <h1 style="color:#FDFBFF;font-size:1.6rem;margin:0;font-weight:700;letter-spacing:0.02em;">New Order Received</h1>
            <p style="color:rgba(253,251,255,0.7);margin:8px 0 0;font-size:0.85rem;letter-spacing:0.1em;">PAPERBOAT GIFTS & FOREVER MOMENTS</p>
          </div>

          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="background:#EDE8F7;">
                <td style="padding:12px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.12em;color:#5B2D8E;font-weight:600;width:40%;">Product</td>
                <td style="padding:12px 16px;font-size:0.9rem;color:#1E1428;font-weight:500;">${productName}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.12em;color:#5B2D8E;font-weight:600;">Size</td>
                <td style="padding:12px 16px;font-size:0.9rem;color:#1E1428;">${size || "Not specified"}</td>
              </tr>
              <tr style="background:#EDE8F7;">
                <td style="padding:12px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.12em;color:#5B2D8E;font-weight:600;">Quantity</td>
                <td style="padding:12px 16px;font-size:0.9rem;color:#1E1428;">${quantity}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.12em;color:#5B2D8E;font-weight:600;">Customization</td>
                <td style="padding:12px 16px;font-size:0.9rem;color:#1E1428;">${customization || "None"}</td>
              </tr>
              <tr style="background:#EDE8F7;">
                <td style="padding:12px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.12em;color:#5B2D8E;font-weight:600;">Message</td>
                <td style="padding:12px 16px;font-size:0.9rem;color:#1E1428;">${message || "—"}</td>
              </tr>
            </table>

            <div style="margin:28px 0 0;padding:20px;background:#EDE8F7;border-left:3px solid #5B2D8E;">
              <h3 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:#5B2D8E;margin:0 0 12px;">Customer Details</h3>
              <p style="margin:4px 0;font-size:0.9rem;color:#1E1428;"><strong>Name:</strong> ${customerName}</p>
              <p style="margin:4px 0;font-size:0.9rem;color:#1E1428;"><strong>Phone:</strong> <a href="tel:${customerPhone}" style="color:#5B2D8E;">${customerPhone}</a></p>
              <p style="margin:4px 0;font-size:0.9rem;color:#1E1428;"><strong>Email:</strong> <a href="mailto:${customerEmail}" style="color:#5B2D8E;">${customerEmail}</a></p>
            </div>

            ${imageUrls.length ? `
            <div style="margin:20px 0 0;padding:20px;background:#FDF6D8;border-left:3px solid #F5C842;">
              <h3 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:#D4A820;margin:0 0 10px;">📸 Uploaded Photos (${imageUrls.length})</h3>
              <p style="font-size:0.88rem;color:#1E1428;margin:0;">${imageLinksHtml}</p>
            </div>` : ""}

            <div style="margin:28px 0 0;text-align:center;">
              <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hello! New order received.\n\nProduct: ${productName}\nSize: ${size}\nQty: ${quantity}\nCustomization: ${customization}\n\nCustomer: ${customerName}\nPhone: ${customerPhone}\nEmail: ${customerEmail}`
              )}" style="display:inline-block;background:#25D366;color:#fff;padding:14px 32px;font-size:0.8rem;letter-spacing:0.1em;text-decoration:none;font-weight:500;">
                💬 Open WhatsApp to Reply
              </a>
            </div>
          </div>

          <div style="padding:16px 32px;border-top:1px solid rgba(91,45,142,0.1);text-align:center;">
            <p style="color:#9B93A8;font-size:0.75rem;margin:0;">Paperboat Gifts — frames.paperboatphotography.in</p>
          </div>
        </div>
      `,
    });

    // ── Customer confirmation email ───────────────────────────────────
    await transporter.sendMail({
      from: `"Paperboat Gifts" <${process.env.SMTP_USER}>`,
      to: customerEmail,
      subject: `Your order is confirmed — ${productName} 🎁`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:560px;margin:0 auto;background:#FDFBFF;border:1px solid rgba(91,45,142,0.12);">
          <div style="background:linear-gradient(135deg,#5B2D8E,#3D1D63);padding:32px;text-align:center;">
            <h1 style="color:#FDFBFF;font-size:1.5rem;margin:0;">Thank You, ${customerName}!</h1>
            <p style="color:${`#F5C842`};margin:8px 0 0;font-size:0.85rem;">Your order has been received.</p>
          </div>
          <div style="padding:32px;text-align:center;">
            <p style="font-size:1rem;color:#1E1428;line-height:1.7;">We've received your order for <strong>${productName}</strong> and our team will reach out within <strong>24 hours</strong> to confirm the details and begin crafting.</p>
            <div style="margin:24px 0;padding:20px;background:#EDE8F7;">
              <p style="margin:0;font-size:0.85rem;color:#5B2D8E;"><strong>Order Summary</strong><br/>${productName} — Size: ${size || "TBD"} — Qty: ${quantity}</p>
            </div>
            <p style="font-size:0.85rem;color:#6B6478;">Questions? WhatsApp us at <a href="tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}" style="color:#5B2D8E;">+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</a></p>
          </div>
          <div style="padding:16px;text-align:center;border-top:1px solid rgba(91,45,142,0.08);">
            <p style="color:#9B93A8;font-size:0.72rem;margin:0;">Paperboat Gifts & Forever Moments — Chennai, India</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order email error:", err);
    return NextResponse.json({ error: "Failed to send order" }, { status: 500 });
  }
}
