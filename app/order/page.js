import NavBar from '@/components/NavBar'
const items = [
  { id: 1, title: 'Bowl pollo & quinoa', price: 9.90 },
  { id: 2, title: 'Wrap salmone & avocado', price: 8.50 },
  { id: 3, title: 'Insalata proteica', price: 7.90 },
]
export default function OrderPage() {
  return (
    <main className="pb-20">
      <h1 className="text-xl font-semibold text-emerald-700">Ordina ora</h1>
      <ul className="mt-4 grid gap-3">
        {items.map(i => (
          <li key={i.id} className="bg-white rounded-xl border p-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium">{i.title}</h3>
              <p className="text-sm text-gray-600">€ {i.price.toFixed(2)}</p>
            </div>
            <button className="rounded-md bg-emerald-600 text-white px-3 py-2">Aggiungi</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 bg-white rounded-xl border p-4">
        <h2 className="font-medium">Checkout (mock)</h2>
        <p className="text-sm text-gray-600">Integra in seguito con Deliveroo/Glovo o partner locali.</p>
        <button className="mt-3 w-full rounded-md bg-lime-500 text-white py-2">Procedi</button>
      </div>
      <NavBar active="/order" />
    </main>
  )
}
