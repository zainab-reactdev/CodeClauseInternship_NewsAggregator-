import React from 'react'

/**
 * Home.jsx
 * - Simple page wrapper that provides spacing and optional future layout
 * - Children are the page content (categories + article list)
 */
export default function Home({ children }) {
  return (
    <section>
      {/* This wrapper keeps content centered and provides top spacing */}
      <div className="mt-6">
        {children}
      </div>
    </section>
  )
}
