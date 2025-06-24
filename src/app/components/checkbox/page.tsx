'use client'

import Link from 'next/link'
import TermsCheckbox from '@/components/TersmCheckBox'

export default function TermsCheckboxPage() {
  return (
    <main className="p-8 sm:p-16">
      <Link
        href="/"
        className="text-sm text-blue-500 font-sans hover:underline"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-12 font-sans">
        Terms & Conditions Checkbox
      </h1>

      <div className="space-y-8 max-w-xl mx-auto">
        <TermsCheckbox />
        <TermsCheckbox withSubtext={false} />
        <TermsCheckbox disabled />
        <TermsCheckbox withBoxBorder />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 pt-10">
        <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md">
          View Code
        </button>
        <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-md">
          Download Code
        </button>
        <button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 text-sm rounded-md">
          Copy Code
        </button>
        <button className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm rounded-md">
          Setup Instructions
        </button>
      </div>
    </main>
  )
}
