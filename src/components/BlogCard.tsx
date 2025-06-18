'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden font-sans">
      <Image
        src="/solar-panels.png" // Replace with your actual image path
        alt="Solar panels"
        width={800}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-4">
        <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
          Industry
        </span>

        <h2 className="text-xl font-bold text-black">
          Perm Vs Freelance
        </h2>

        <p className="text-gray-700 text-base">
          Learn how solar energy can revolutionize the way we power our homes.
        </p>

        <Link
          href="#"
          className="text-blue-600 hover:underline font-medium inline-block"
        >
          Learn More &gt;
        </Link>
      </div>
    </div>
  )
}
