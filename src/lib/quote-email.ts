import type { QuoteRequestInput } from "@/lib/validation";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildQuoteEmail(payload: QuoteRequestInput) {
  const submittedAt = new Date();
  const submittedAtLocal = submittedAt.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  const fields = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Location", payload.location],
    ["Submitted", `${submittedAtLocal} (America/New_York)`],
  ] as const;

  const escapedMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  return {
    subject: `New estimate request from ${payload.name}`,
    text: [
      "New estimate request",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Location: ${payload.location}`,
      `Submitted: ${submittedAtLocal} (America/New_York)`,
      "",
      "Service Needed / Message:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="background:#0b0b0d;padding:32px;font-family:Poppins,Arial,sans-serif;color:#f5f5f5;">
        <div style="max-width:680px;margin:0 auto;border:1px solid rgba(255,255,255,0.12);border-radius:24px;overflow:hidden;background:linear-gradient(180deg,#111215 0%,#0b0b0d 100%);">
          <div style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.08);background:linear-gradient(135deg,rgba(249,115,22,0.18),rgba(255,255,255,0.02));">
            <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#fdba74;">New estimate request</p>
            <h1 style="margin:0;font-size:30px;line-height:1.1;font-family:Georgia,'Times New Roman',serif;color:#ffffff;">Ratcliff Rebuild Right LLC lead notification</h1>
          </div>
          <div style="padding:28px 32px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;">
              <tbody>
                ${fields
                  .map(
                    ([label, value]) => `
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#a1a1aa;width:160px;">${escapeHtml(label)}</td>
                        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:15px;color:#f5f5f5;">${escapeHtml(value)}</td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
            <div style="margin-top:24px;padding:20px;border:1px solid rgba(255,255,255,0.08);border-radius:20px;background:rgba(255,255,255,0.03);">
              <p style="margin:0 0 10px 0;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#fdba74;">Service Needed / Message</p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#f5f5f5;">${escapedMessage}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };
}
