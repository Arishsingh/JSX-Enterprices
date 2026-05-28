import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { email, company, service, phone, message } = await request.json()

  if (!email || !phone || !message) {
    return NextResponse.json({ error: 'Email, phone, and message are required.' }, { status: 400 })
  }

  try {
    const { error } = await resend.emails.send({
      from: 'JSX Enterprises <onboarding@resend.dev>',
      to: 'priyalraina9099@gmail.com',
      replyTo: email,
      subject: `New Enquiry — ${service || 'General'} from ${email}`,
      text: `New enquiry received\n\nEmail: ${email}\nCompany: ${company || '—'}\nService: ${service || '—'}\nPhone: ${phone}\nMessage:\n${message}`,
      html: `
  <!DOCTYPE html>
  <html lang="en">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08)">
          <tr>
            <td style="background:#1e293b;padding:24px 32px">
              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px">JSX Enterprises</p>
              <p style="margin:4px 0 0;color:#94a3b8;font-size:13px">New Enquiry Received</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;width:100px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Email</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;width:100px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Company</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a">${company || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;width:100px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Service</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a">${service || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;width:100px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Phone</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a">${phone}</td>
                </tr>
              </table>
              <div style="margin-top:24px">
                <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px">Message</p>
                <p style="margin:0;font-size:14px;color:#0f172a;line-height:1.6;white-space:pre-wrap">${message}</p>
              </div>
              <div style="margin-top:28px;padding:16px;background:#f8fafc;border-radius:8px">
                <p style="margin:0;font-size:13px;color:#64748b">Hit <strong>Reply</strong> to respond directly to ${email}.</p>
              </div>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
