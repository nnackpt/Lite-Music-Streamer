'use client';

import { useState } from "react";
import { searchVideos } from "@/lib/youtube";

export default function SearchBar({ onSearchResults }) {
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!query.trim()) return

        setIsLoading(true)
        try {
            const results = await searchVideos(query)
            onSearchResults(results)
        } catch (error) {
            console.error('Error fetching search results:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSearch} className="search-bar-container">
            <div className="pixel-container">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for music or artists..."
                    className="pixel-input"
                    disabled={isLoading} 
                />
                <button type="submit" className="pixel-button search-btn" disabled={isLoading}>
                    {isLoading ? 'Loading...' : '🔎 Search'}
                </button>
            </div>
        </form>
    )
}