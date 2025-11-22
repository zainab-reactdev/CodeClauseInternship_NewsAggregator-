import React from 'react'

/**
 * ArticleCard.jsx
 * - Single news article card
 * Props:
 *  - article: object returned from API (expected keys: urlToImage, title, description, source.name, url, publishedAt)
 */

export default function ArticleCard({ article }) {
  const {
    urlToImage,
    title,
    description,
    url,
    source = {},
    publishedAt
  } = article

  const published = publishedAt ? new Date(publishedAt).toLocaleString() : ''

  return (
    <article className="bg-white rounded-xl overflow-hidden card-shadow">
      {/* Image */}
      <div className="h-44 md:h-48 w-full bg-slate-100 shrink-0">
        {urlToImage ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={urlToImage} alt={title ?? 'Article image'} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
            No image available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2">{title}</h3>

        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {description || 'No description available.'}
        </p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            <div className="font-medium text-slate-700">{source.name}</div>
            <div className="mt-0.5">{published}</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1.5 rounded-full border border-indigo-600 text-indigo-600 text-sm hover:bg-indigo-50 transition"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
