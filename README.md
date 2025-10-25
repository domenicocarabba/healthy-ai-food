# Healthy AI Food — Starter (Next.js + Tailwind)

Starter mobile-first per MVP:

- App Router (Next.js 14)
- Tailwind CSS
- Pagine: Home, Chat AI, Ricette, Ordina, Profilo
- API route `/api/chat` integrata con OpenAI (usa `OPENAI_API_KEY`)

## 🚀 Avvio locale

```bash
# 1) Installa dipendenze
npm install

# 2) Copia .env
cp .env.example .env.local
# Apri .env.local e metti la tua OPENAI_API_KEY

# 3) Dev server
npm run dev
# Apri http://localhost:3000
```

## 🧠 AI
La route `app/api/chat/route.js` usa `openai` SDK e il modello `gpt-4o-mini`.
Se vuoi cambiare modello, modifica `model:`. Mantieni i messaggi brevi e sicuri.

## 📦 Deploy
- **Vercel**: collega il repo GitHub → Import Project → setta `OPENAI_API_KEY` in Project Settings → Deploy.
- Connetti il dominio (es. *healthyaifood.it*) da Vercel → Domains.

## 📇 Dati
Ricette demo in `data/recipes.json`. Puoi passare ad Airtable/DB in seguito.

## 📌 TODO successivi
- Autenticazione (NextAuth o Clerk)
- Persistenza profilo utente
- Integrazione partner delivery (link esterni o API)
- Metriche (Vercel Analytics / GA4)
- Brand (logo, palette, font)
