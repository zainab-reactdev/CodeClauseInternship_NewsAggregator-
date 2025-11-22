import React from 'react'

/**
 * Error.jsx
 * - Simple error message UI
 * Props:
 *  - message: string
 */

export default function Error({ message = 'Something went wrong.' }) {
  return (
    <div className="mt-12 rounded-lg bg-red-50 border border-red-100 p-4 text-sm text-red-700">
      <strong className="block text-sm">Error</strong>
      <div className="mt-1">{message}</div>
    </div>
  )
}
