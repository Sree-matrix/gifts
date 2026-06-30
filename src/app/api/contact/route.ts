import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, productInterested, message } = body;

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST || "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"Paperboat Gifts Website" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Enquiry from ${name} — ${productInterested}`,
      html: `
        <div style="font-family:'Jost',Arial,sans-serif;max-width:560px;margin:0 auto;background:#FDFBFF;border:1px solid rgba(91,45,142,0.12);">
          <div style="background:#5B2D8E;padding:24px 32px;">
            <h2 style="color:#FDFBFF;margin:0;font-size:1.2rem;letter-spacing:0.05em;">New Contact Form Submission</h2>
            <p style="color:rgba(253,251,255,0.7);margin:4px 0 0;font-size:0.8rem;">Paperboat Gifts & Forever Moments</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              ${[["Name",name],["Phone",phone],["Email",email],["Product Interest",productInterested]].map(([k,v])=>`
              <tr>
                <td style="padding:10px 0;color:#6B6478;font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;width:140px;">${k}</td>
                <td style="padding:10px 0;color:#1E1428;font-size:0.9rem;font-weight:400;">${v}</td>
              </tr>`).join("")}
            </table>
            <div style="margin-top:20px;padding:20px;background:#F8F6FF;border-left:3px solid #5B2D8E;">
              <p style="margin:0 0 6px;color:#6B6478;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;">Message</p>
              <p style="margin:0;color:#1E1428;font-size:0.9rem;line-height:1.7;">${message}</p>
            </div>
          </div>
          <div style="padding:16px 32px;border-top:1px solid rgba(91,45,142,0.1);text-align:center;">
            <p style="color:#9B93A8;font-size:0.75rem;margin:0;">Paperboat Gifts — frames.paperboatphotography.in</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
