'use client'
import { useEffect } from 'react'
import { APIError } from './_utils/Error'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string } | APIError
  reset: () => void
}) {
  useEffect(() => {
    console.log(error instanceof APIError)
    console.log('きたよ')
  }, [error])

  return (
    <div>
      <h2>{error instanceof APIError ? error.title : error.name}</h2>
      <h2>{error instanceof APIError ? error.description : error.message}</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}