'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
      <div>
        <h1 className="text-2xl font-sans">Login to your account</h1>
        <p className="text-md text-gray-600 mt-1 font-sans">
          Enter your email and password below to login to your account
        </p>
      </div>

      <div className="space-y-4 font-sans">
        <div>
          <Label htmlFor="email" className='pb-2'>Email*</Label>
          <Input id="email" type="email" placeholder="Value" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <Label htmlFor="password" className='pb-2'>Password*</Label>
            <Link href="#" className="text-sm underline pb-2">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="Value" />
        </div>

        <Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white">
          Login
        </Button>

        <Button
          variant="outline"
          className="w-full border-gray-400 text-gray-700 hover:bg-gray-100"
        >
          Login with Google
        </Button>

        <p className="text-sm text-left text-gray-700 py-3">
          You don’t have a login? Learn{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            Sign Up &gt;
          </Link>
        </p>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Button
        </Button>
      </div>
    </div>
  )
}
