import { NextRequest, NextResponse } from "next/server";

const BODY_KEYS = [
  "name",
  "email",
  "phone",
  "service",
  "job_location",
  "time_required",
  "event_date",
  "type_of_event",
  "amount_of_guests",
  "budget",
  "special_notes",
  "how_did_you_hear",
] as const;

type Payload = Partial<Record<(typeof BODY_KEYS)[number], string>>;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const name = body.name?.trim();
    const email = body.email?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        { message: "Form is not configured. Please add WEB3FORMS_ACCESS_KEY to .env" },
        { status: 503 }
      );
    }

    const web3Payload = {
      access_key: accessKey,
      subject: `New enquiry from ${name} — Prestige Event Collective`,
      from_name: "Prestige Event Collective (Website)",
      ...body,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3Payload),
    });

    const raw = await res.text();
    let data: { success?: boolean; message?: string };
    try {
      data = JSON.parse(raw) as { success: boolean; message?: string };
    } catch {
      console.error("Web3Forms returned non-JSON (e.g. HTML). Status:", res.status, "Body preview:", raw.slice(0, 200));
      return NextResponse.json(
        { message: "The form service returned an unexpected response. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    if (!res.ok || !data.success) {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { message: data.message || "Failed to send. Please try again." },
        { status: res.ok ? 500 : res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
