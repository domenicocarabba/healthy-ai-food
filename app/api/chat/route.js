import OpenAI from 'openai'
export async function POST(req) {
  const { messages = [] } = await req.json()
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Sei un coach alimentare. Dai risposte brevi, pratiche e sicure. Chiedi intolleranze, obiettivi e preferenze quando utile.' },
        ...messages
      ]
    })
    const reply = completion.choices?.[0]?.message?.content ?? 'Nessuna risposta.'
    return new Response(JSON.stringify({ reply }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'OpenAI error' }), { status: 500 })
  }
}
