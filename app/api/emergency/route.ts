// app/api/emergency/route.ts

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { emergencyNumber, location } = body

    const accountSid = process.env.TWILIO_ACCOUNT_SID!
    const authToken = process.env.TWILIO_AUTH_TOKEN!
    const fromNumber = process.env.TWILIO_PHONE_NUMBER!

    const messageBody = `🚨 Emergency! Immediate help needed.\n📍Location: ${location}`
    // const mapLink = https://www.google.com/maps?q=${location}
    // const message = 🚨 Emergency Alert!\n📍 Location: ${mapLink}

    const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString("base64")

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        To: emergencyNumber,
        From: fromNumber,
        Body: messageBody,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Twilio error:", data)
      return new Response(JSON.stringify({ success: false, error: data }), { status: 500 })
    }

    return new Response(JSON.stringify({ success: true, sid: data.sid }), { status: 200 })
  } catch (error) {
    console.error("Request failed:", error)
    return new Response(JSON.stringify({ success: false, error: "Internal Server Error" }), { status: 500 })
  }
}
