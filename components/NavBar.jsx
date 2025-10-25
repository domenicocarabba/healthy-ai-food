import Link from 'next/link'
import clsx from 'clsx'
const tabs = [
  { href: '/', label: 'Home' },
  { href: '/chat', label: 'Chat AI' },
  { href: '/recipes', label: 'Ricette' },
  { href: '/order', label: 'Ordina' },
  { href: '/profile', label: 'Profilo' },
]
export default function NavBar({ active='' }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-200">
      <ul className="container flex justify-between py-3 text-sm">
        {tabs.map(t => (
          <li key={t.href}>
            <Link
              href={t.href}
              className={clsx('px-2 py-1 rounded-md', active === t.href && 'bg-emerald-100 text-emerald-700 font-medium')}
            >
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
