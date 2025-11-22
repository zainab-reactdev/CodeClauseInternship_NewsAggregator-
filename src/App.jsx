import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import Header from "./assets/components/Header";
import Categories from "./assets/components/Categories";
import ArticleList from "./assets/components/ArticleList";
import Spinner from "./assets/components/Spinner";
import Error from "./assets/components/Error";
import Home from "./assets/pages/Home";

// Base URL for NewsAPI
const API_BASE = 'https://newsapi.org/v2/top-headlines';

// Import API key from .env file
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export default function App() {
  const [category, setCategory] = useState('technology'); // default category
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch articles using category and query
  const fetchArticles = useCallback(async (cat, q) => {
    setLoading(true);
    setError(null);
    setArticles([]);

    try {
      const params = new URLSearchParams({
        apiKey: apiKey,
        pageSize: '24',
        country: 'us',
      });

      if (cat) params.set('category', cat);
      if (q && q.trim().length > 0) {
        params.set('q', q.trim());
      }

      const url = `${API_BASE}?${params.toString()}`;
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Network error: ${res.status}`);
      const data = await res.json();

      if (data.status !== 'ok') {
        throw new Error(data.message || 'Failed to fetch articles');
      }

      if (!data.articles || data.articles.length === 0) {
        setArticles([]);
        setError({ message: 'No articles found.' });
      } else {
        setArticles(data.articles);
      }
    } catch (err) {
      console.error('fetch error', err);
      setError({ message: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch & re-fetch on category or query change
  useEffect(() => {
    fetchArticles(category, query);
  }, [category, query, fetchArticles]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header contains title + search bar */}
      <Header onSearch={(q) => setQuery(q)} initialQuery={query} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Categories row */}
        <Categories
          selected={category}
          onChange={(c) => {
            setCategory(c);
            setQuery(''); // clear search when switching category
          }}
        />

        {/* Page layout */}
        <Home>
          {/* Conditional rendering */}
          {loading && <Spinner />}

          {!loading && error && <Error message={error.message} />}

          {!loading && !error && articles.length === 0 && (
            <div className="mt-12 text-center text-slate-600">
              No articles to display.
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <ArticleList articles={articles} />
          )}
        </Home>
      </main>
    </div>
  );
}
