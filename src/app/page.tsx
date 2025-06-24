// app/page.tsx
'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import Nav from './components/nav'
import Footer from './components/footer'

const components = [
  {
    name: 'Accordion',
    description: 'This is the description',
    href: '/components/accordion',
  },
  {
    name: 'Login Form',
    description: 'This is the description',
    href: '/components/loginform',
  },
  {
    name: 'Blog Card',
    description: 'This is the description',
    href: '/components/blogcard',
  },
  {
    name: 'Checkbox',
    description: 'This is the description',
    href: '/components/checkbox',
    highlight: false,
  },
]

export default function Home() {
  return (
    <>
    <Nav/>
    
    <main className="min-h-100 px-6 py-20 sm:px-12 font-sans text-center">
      {/* Subheading */}
      <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
        Component <span className="text-blue-500">Library</span> v 0.1
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
        Unleash Your Creativity
        <br />
        Professionally Designed Components UI.
      </h1>

      {/* Avatar/icon placeholder (optional) */}
      {/* <div className="mt-4 mb-16 flex justify-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div> */}

      {/* Section title */}
      <p className="uppercase text-xs font-medium tracking-widest mb-6 mt-20">Components</p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
        {components.map((comp) => (
          <Link
            key={comp.name}
            href={comp.href}
            className={cn(
              'border rounded-md px-6 py-4 text-left w-[200px] md:w-[450px] transition-all',
              'hover:shadow-md hover:bg-blue-50 dark:hover:bg-blue-50',
              comp.highlight
                ? 'border-blue-500 bg-blue-50'
                : 'border-black/10 bg-white'
            )}
          >
            <h2 className="text-sm font-bold mb-1">{comp.name}</h2>
            <p className="text-sm text-muted-foreground">{comp.description}</p>
          </Link>
        ))}
      </div>
    </main>
    <Footer/>
    </>
  )
}
