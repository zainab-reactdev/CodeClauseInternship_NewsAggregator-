import React, { useState } from "react";

export default function Header({ onSearch, initialQuery }) {
  const [query, setQuery] = useState(initialQuery || "");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Title */}
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-white">News</span><span className="text-blue-300">Hub</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#technology" className="hover:text-blue-300 transition">Technology</a>
          <a href="#business" className="hover:text-blue-300 transition">Business</a>
          <a href="#sports" className="hover:text-blue-300 transition">Sports</a>
          <a href="#entertainment" className="hover:text-blue-300 transition">Entertainment</a>
        </nav>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center ml-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="px-3 py-1 rounded-l-md border-none outline-none text-white-700"
          />
          <button
            type="submit"
            className="bg-white text-blue-900 px-3 py-1 rounded-r-md font-semibold hover:bg-gray-200 transition"
          >
            Search
          </button>
        </form>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-4 pt-4 pb-6 space-y-3 text-white">
          <a href="#technology" className="block hover:text-blue-300 transition">Technology</a>
          <a href="#business" className="block hover:text-blue-300 transition">Business</a>
          <a href="#sports" className="block hover:text-blue-300 transition">Sports</a>
          <a href="#entertainment" className="block hover:text-blue-300 transition">Entertainment</a>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mt-3 flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="flex-1 px-3 py-2 rounded-l-md border-none outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-900 px-3 py-2 rounded-r-md font-semibold hover:bg-gray-200 transition"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
