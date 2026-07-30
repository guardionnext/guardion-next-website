import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE, SERVICES } from "@/lib/site";

// The Resend SDK needs the Node.js runtime (not Edge). This is the default for
// route handlers, but we set it explicitly so it holds on Vercel.
export const runtime = "nodejs";
// The key is read at request time, so the app builds and deploys fine without
// it — submissions just return a clear "not configured" error until it's set.
export const dynamic = "force-dynamic";

// Route handlers run on the server, so the Resend API key is never exposed
// to the browser. Configure these in .env.local (see .env.example).
const RESEND_API_KEY = process.env.RESEND_API_KEY;
// `from` must be an address on a domain you have verified in Resend. Until the
// Guardion domain is verified you can use Resend's shared "onboarding@resend.dev".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Guardion <onboarding@resend.dev>";
// Where enquiries are delivered. Defaults to the public inbox from site config.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? SITE.email;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICE_TITLES: readonly string[] = SERVICES.map((s) => s.title);

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  message?: string;
  website?: string; // honeypot
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots that fill the hidden "website" field get a silent success.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const service = (body.service ?? "").trim();
  const location = (body.location ?? "").trim();
  const message = (body.message ?? "").trim();

  // Server-side validation — never trust the client.
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!EMAIL_RE.test(email)) errors.email = "A valid email is required.";
  if (!phone) errors.phone = "Phone is required.";
  if (!service || !SERVICE_TITLES.includes(service)) errors.service = "A valid service is required.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the form.", errors }, { status: 422 });
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Service", service],
    ["Location", location || "—"],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New enquiry from the Guardion website</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold; vertical-align: top; white-space: nowrap;">${label}</td>
            <td style="padding: 6px 0;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    "New enquiry from the Guardion website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry — ${service} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your enquiry." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json({ error: "Could not send your enquiry." }, { status: 500 });
  }
}
