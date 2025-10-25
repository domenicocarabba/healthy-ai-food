'use client'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ciao! Dimmi preferenze e obiettivi e creo un piano healthy per te 💚' }
  ])
  const [input, setInput] = useState('Consigliami una colazione proteica')
  async function onSend(e) {
    e.preventDefault()
    const user = { role: 'user', content: input }
    setMessages(prev => [...prev, user])
    setInput('')
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, user].slice(-10) })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Errore AI. Controlla la chiave OpenAI sul server.' }])
    }
  }
  return (
    <main className="pb-20">
      <h1 className="text-xl font-semibold text-emerald-700">Chat AI</h1>
      <div className="mt-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={m.role === 'user' ? 'inline-block bg-emerald-600 text-white px-3 py-2 rounded-2xl' : 'inline-block bg-white px-3 py-2 rounded-2xl border'}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={onSend} className="fixed bottom-14 left-0 right-0 container flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Chiedimi un piano settimanale vegano…" className="flex-1 border rounded-md px-3 py-2"/>
        <button className="rounded-md px-4 bg-emerald-600 text-white">Invia</button>
      </form>
      <NavBar active="/chat" />
    </main>
  )
}
