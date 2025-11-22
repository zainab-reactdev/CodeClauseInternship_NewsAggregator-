import React from 'react'
import ArticleCard from './ArticleCard'

/**
 * ArticleList.jsx
 * - Renders grid of ArticleCard components
 * - Responsive: 1 column mobile -> 2 medium -> 3 large
 *
 * Props:
 * - articles: array of article objects
 */

export default function ArticleList({ articles }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a, i) => (
        <ArticleCard key={a.url || i} article={a} />
      ))}
    </div>
  )
}
