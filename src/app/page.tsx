// app/page.tsx
'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const components = [
  {
    name: 'Accordion',
    description: 'Expandable/collapsible section',
    href: '/components/accordion',
  },
  {
    name: 'Login Form',
    description: 'Description',
    href: '/components/loginform',
  },
  {
    name: 'Blog Card',
    description: 'Description',
    href: '/components/blogcard',
  },
  // Add more as needed
]


export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 sm:px-20 font-sans">
      <h1 className="text-3xl font-bold mb-10">UI Components</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((comp) => (
          <Link
            key={comp.name}
            href={comp.href}
            className={cn(
              'border border-black/10 rounded-xl p-6 transition hover:shadow-lg hover:bg-gray-50 dark:hover:bg-zinc-800',
              'flex flex-col justify-between h-full'
            )}
          >
            <h2 className="text-xl font-semibold mb-2">{comp.name}</h2>
            <p className="text-sm text-muted-foreground">{comp.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
