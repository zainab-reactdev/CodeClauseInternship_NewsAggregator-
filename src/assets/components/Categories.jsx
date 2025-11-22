import React from 'react'

/**
 * Categories.jsx
 * - Renders a row of category buttons/tabs
 * - Props:
 *    selected: currently selected category (string)
 *    onChange: function(category) to notify parent
 */

const CATEGORIES = [
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'sports', label: 'Sports' },
  { id: 'health', label: 'Health' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'science', label: 'Science' },
]

export default function Categories({ selected, onChange }) {
  return (
    <nav className="flex justify-center gap-4 overflow-x-auto py-4 px-2">
      {CATEGORIES.map((cat) => {
        const active = selected === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-lg font-semibold transition-all duration-200
              ${active
                ? 'bg-blue-700 text-white shadow-lg'
                : 'bg-white text-blue-900 border border-blue-300 hover:bg-blue-100'
              }`}
            aria-current={active ? 'page' : undefined}
          >
            {cat.label}
          </button>
        )
      })}
    </nav>
  )
}
