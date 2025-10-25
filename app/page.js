import Link from 'next/link'
import NavBar from '@/components/NavBar'
export default function Page() {
  return (
    <main className="pb-20">
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-emerald-700">Healthy AI Food</h1>
        <p className="text-gray-700">Mangia sano, con la tua AI personale 🍱🤖</p>
        <div className="grid gap-3">
          <Link href="/chat" className="w-full rounded-xl bg-emerald-600 text-white py-3 text-center">Inizia ora</Link>
          <Link href="/recipes" className="w-full rounded-xl bg-lime-500 text-white py-3 text-center">Scopri ricette</Link>
        </div>
      </section>
      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold">Come funziona</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>L'AI ti conosce (preferenze, obiettivi, intolleranze)</li>
          <li>Genera piani e ricette personalizzate</li>
          <li>Puoi cucinare tu o ordinare dai partner</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Partecipa alla beta</h2>
        <form action="https://formspree.io/f/mayplqyo" method="POST" className="bg-white/80 rounded-xl p-4 shadow">
          <label className="block text-sm mb-1">Email</label>
          <input name="email" type="email" required placeholder="tu@email.it" className="w-full border rounded-md px-3 py-2"/>
          <label className="block text-sm mt-3 mb-1">Obiettivo</label>
          <input name="goal" placeholder="dimagrire, più energia, ecc." className="w-full border rounded-md px-3 py-2"/>
          <button className="mt-4 w-full rounded-lg bg-emerald-600 text-white py-2">Iscrivimi</button>
        </form>
      </section>
      <NavBar active="/" />
    </main>
  )
}
