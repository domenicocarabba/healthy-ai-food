import NavBar from '@/components/NavBar'
import recipes from '@/data/recipes.json'
export default function RecipesPage() {
  return (
    <main className="pb-20">
      <h1 className="text-xl font-semibold text-emerald-700">Ricette suggerite</h1>
      <ul className="mt-4 grid gap-3">
        {recipes.map(r => (
          <li key={r.id} className="bg-white rounded-xl border p-4">
            <h3 className="font-medium">{r.title}</h3>
            <p className="text-sm text-gray-600">{r.kcal} kcal • {r.protein}g pro • {r.carbs}g carb • {r.fat}g fat</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {r.tags.map(t => <span key={t} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{t}</span>)}
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-md bg-lime-500 text-white py-2">Ordina ingredienti</button>
              <button className="flex-1 rounded-md bg-white border py-2">Aggiungi al piano</button>
            </div>
          </li>
        ))}
      </ul>
      <NavBar active="/recipes" />
    </main>
  )
}
