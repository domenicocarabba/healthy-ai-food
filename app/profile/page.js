'use client'
import { useState } from 'react'
import NavBar from '@/components/NavBar'
export default function ProfilePage() {
  const [prefs, setPrefs] = useState({ diet: 'onnivoro', intolerances: 'lattosio', goal: 'più energia' })
  function update(field, value) { setPrefs(p => ({ ...p, [field]: value })) }
  return (
    <main className="pb-20">
      <h1 className="text-xl font-semibold text-emerald-700">Profilo</h1>
      <div className="mt-4 bg-white rounded-xl border p-4 space-y-3">
        <div>
          <label className="block text-sm mb-1">Dieta</label>
          <select value={prefs.diet} onChange={e => update('diet', e.target.value)} className="w-full border rounded-md px-3 py-2">
            <option>onnivoro</option>
            <option>vegano</option>
            <option>vegetariano</option>
            <option>low-carb</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Intolleranze</label>
          <input value={prefs.intolerances} onChange={e => update('intolerances', e.target.value)} className="w-full border rounded-md px-3 py-2"/>
        </div>
        <div>
          <label className="block text-sm mb-1">Obiettivo</label>
          <input value={prefs.goal} onChange={e => update('goal', e.target.value)} className="w-full border rounded-md px-3 py-2"/>
        </div>
        <button className="w-full rounded-md bg-emerald-600 text-white py-2">Salva</button>
      </div>
      <NavBar active="/profile" />
    </main>
  )
}
