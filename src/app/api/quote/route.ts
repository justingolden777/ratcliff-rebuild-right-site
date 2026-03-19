import { NextResponse } from "next/server";
import { Resend } from "resend";

import { buildQuoteEmail } from "@/lib/quote-email";
import { quoteRequestSchema } from "@/lib/validation";

function getMailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    to: process.env.CONTACT_TO_EMAIL ?? "ratt79@charter.net",
    from:
      process.env.CONTACT_FROM_EMAIL ??
      "Ratcliff Rebuild Right LLC <quotes@ratcliffrebuildright.com>",
  };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "The request body could not be read." },
      { status: 400 },
    );
  }

  const parsed = quoteRequestSchema.safeParse(payload);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Please review the form fields.";

    return NextResponse.json({ message: firstIssue }, { status: 400 });
  }

  if ((parsed.data.company ?? "").trim().length > 0) {
    return NextResponse.json({
      message: "Thanks. Your request has been received and the next step is a direct follow-up.",
    });
  }

  const config = getMailConfig();

  if (!config.apiKey || !config.from) {
    return NextResponse.json(
      {
        message:
          "The estimate form is not fully configured yet. Please call or text Ratcliff Rebuild Right LLC directly for now.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(config.apiKey);
  const email = buildQuoteEmail(parsed.data);

  try {
    const { error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: parsed.data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (error) {
      console.error("Resend send error", error);
      return NextResponse.json(
        {
          message:
            "We could not send your request right now. Please call or text Ratcliff Rebuild Right LLC directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Thanks. Your request has been sent to Ratcliff Rebuild Right LLC and a follow-up will come soon.",
    });
  } catch (error) {
    console.error("Quote route exception", error);
    return NextResponse.json(
      {
        message:
          "We could not send your request right now. Please call or text Ratcliff Rebuild Right LLC directly.",
      },
      { status: 502 },
    );
  }
}
