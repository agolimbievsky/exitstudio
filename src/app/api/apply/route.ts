import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAILS = [
  "kanishka@yamumedia.com",
  "agolimbievsky@gmail.com",
];

export async function POST(request: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, company, companyWebsite, email, phone, monthlyRevenue, businessModel, bottleneck } = body;

  if (!firstName || !company || !companyWebsite || !email || !monthlyRevenue || !businessModel || !bottleneck) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[ExitStudio] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  // The form submits option values (e.g. "100k-500k", "saas"); render the
  // human-readable labels in the notification instead of the raw codes.
  const REVENUE_LABELS: Record<string, string> = {
    "under-25k": "Under $25K / month",
    "25k-100k": "$25K to $100K / month",
    "100k-500k": "$100K to $500K / month",
    "500k-1m": "$500K to $1M / month",
    "1m+": "$1M+ / month",
  };
  const MODEL_LABELS: Record<string, string> = {
    saas: "SaaS / Software",
    dtc: "DTC / Ecommerce",
    service: "Service business",
    agency: "Agency",
    other: "Other",
  };
  const revenueLabel = REVENUE_LABELS[monthlyRevenue] ?? monthlyRevenue;
  const modelLabel = MODEL_LABELS[businessModel] ?? businessModel;
  // Applicants may type a bare domain; normalise so the link is clickable.
  const websiteHref = /^https?:\/\//i.test(companyWebsite)
    ? companyWebsite
    : `https://${companyWebsite}`;

  try {
    await resend.emails.send({
      from: "ExitStudio Applications <applications@exitstudio.vc>",
      to: NOTIFY_EMAILS,
      replyTo: email,
      subject: `New application: ${firstName} at ${company}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; color: #1a1714;">
          <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7168; margin-bottom: 32px;">
            ExitStudio: New Application
          </p>

          <h2 style="font-size: 24px; font-weight: 400; margin: 0 0 4px 0;">
            ${firstName}
          </h2>
          <p style="font-size: 14px; color: #7a7168; margin: 0 0 32px 0;">
            ${company}
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168; width: 40%;">Email</td>
              <td style="padding: 12px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #b8864e;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Website</td>
              <td style="padding: 12px 0; font-size: 15px;"><a href="${websiteHref}" style="color: #b8864e;">${companyWebsite}</a></td>
            </tr>
            ${phone ? `
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Phone</td>
              <td style="padding: 12px 0; font-size: 15px;">${phone}</td>
            </tr>
            ` : ""}
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Monthly Revenue</td>
              <td style="padding: 12px 0; font-size: 15px;">${revenueLabel}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Business Model</td>
              <td style="padding: 12px 0; font-size: 15px;">${modelLabel}</td>
            </tr>
          </table>

          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168; margin-bottom: 12px;">
            What&apos;s bottlenecking their growth
          </p>
          <p style="font-size: 15px; line-height: 1.7; background: #f5f2ed; padding: 20px 24px; border-left: 3px solid #b8864e; margin: 0;">
            ${bottleneck}
          </p>

          <p style="font-size: 12px; color: #b0a89e; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e8e4de;">
            Reply to this email to respond directly to ${firstName}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[ExitStudio] Resend error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
