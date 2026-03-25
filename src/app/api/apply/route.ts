import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { firstName, company, email, phone, monthlyRevenue, businessModel, bottleneck } = body;

  if (!firstName || !company || !email || !monthlyRevenue || !businessModel || !bottleneck) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "ExitStudio Applications <applications@exitstudio.vc>",
      to: NOTIFY_EMAILS,
      replyTo: email,
      subject: `New application — ${firstName} at ${company}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; color: #1a1714;">
          <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #7a7168; margin-bottom: 32px;">
            ExitStudio — New Application
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
            ${phone ? `
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Phone</td>
              <td style="padding: 12px 0; font-size: 15px;">${phone}</td>
            </tr>
            ` : ""}
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Monthly Revenue</td>
              <td style="padding: 12px 0; font-size: 15px;">${monthlyRevenue}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e4de;">
              <td style="padding: 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #7a7168;">Business Model</td>
              <td style="padding: 12px 0; font-size: 15px;">${businessModel}</td>
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
