"use client"

import { useState } from 'react'

interface App {
  id: number
  name: string
  category: string
  users: string
  description: string
  color: string
  rank: number
}

const mostUsedApps: App[] = [
  {
    id: 1,
    name: 'WhatsApp',
    category: 'Messaging',
    users: '2.78 billion',
    description: 'Free messaging and video calling app',
    color: 'from-green-400 to-green-600',
    rank: 1
  },
  {
    id: 2,
    name: 'Instagram',
    category: 'Social Media',
    users: '2.04 billion',
    description: 'Photo and video sharing social network',
    color: 'from-pink-400 to-purple-600',
    rank: 2
  },
  {
    id: 3,
    name: 'Facebook',
    category: 'Social Media',
    users: '3.07 billion',
    description: 'Social networking platform',
    color: 'from-blue-500 to-blue-700',
    rank: 3
  },
  {
    id: 4,
    name: 'TikTok',
    category: 'Entertainment',
    users: '1.58 billion',
    description: 'Short-form video hosting service',
    color: 'from-cyan-400 to-pink-500',
    rank: 4
  },
  {
    id: 5,
    name: 'YouTube',
    category: 'Entertainment',
    users: '2.70 billion',
    description: 'Video sharing and streaming platform',
    color: 'from-red-500 to-red-700',
    rank: 5
  },
  {
    id: 6,
    name: 'Snapchat',
    category: 'Social Media',
    users: '800 million',
    description: 'Multimedia messaging app',
    color: 'from-yellow-300 to-yellow-500',
    rank: 6
  },
  {
    id: 7,
    name: 'Telegram',
    category: 'Messaging',
    users: '900 million',
    description: 'Cloud-based instant messaging service',
    color: 'from-blue-400 to-cyan-500',
    rank: 7
  },
  {
    id: 8,
    name: 'Twitter (X)',
    category: 'Social Media',
    users: '619 million',
    description: 'Social media and microblogging platform',
    color: 'from-gray-700 to-gray-900',
    rank: 8
  },
  {
    id: 9,
    name: 'Netflix',
    category: 'Entertainment',
    users: '260 million',
    description: 'Streaming service for movies and TV shows',
    color: 'from-red-600 to-black',
    rank: 9
  },
  {
    id: 10,
    name: 'Spotify',
    category: 'Music',
    users: '615 million',
    description: 'Music streaming and podcast platform',
    color: 'from-green-500 to-green-700',
    rank: 10
  },
  {
    id: 11,
    name: 'Gmail',
    category: 'Productivity',
    users: '1.80 billion',
    description: 'Email service by Google',
    color: 'from-red-400 to-yellow-400',
    rank: 11
  },
  {
    id: 12,
    name: 'Google Maps',
    category: 'Navigation',
    users: '1.50 billion',
    description: 'Web mapping and navigation service',
    color: 'from-green-400 to-blue-500',
    rank: 12
  }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = ['All', ...Array.from(new Set(mostUsedApps.map(app => app.category)))]

  const filteredApps = mostUsedApps.filter(app => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            Most Used Apps Worldwide
          </h1>
          <p className="text-gray-600 text-lg">Discover the most popular applications across the globe</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg shadow-sm"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">{filteredApps.length}</div>
            <div className="text-gray-600 font-medium">Apps Listed</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600 font-medium">Categories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">Billions</div>
            <div className="text-gray-600 font-medium">Total Users</div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app, index) => (
            <div
              key={app.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${app.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-gray-800">#{app.rank}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {app.name}
                  </h3>
                </div>

                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-3">
                  {app.category}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {app.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Active Users</div>
                    <div className="text-xl font-bold text-gray-800">{app.users}</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {app.rank}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredApps.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No apps found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">
            Data represents approximate active users worldwide as of 2024-2025
          </p>
        </div>
      </footer>
    </main>
  )
}
