'use client';

import MusicCard from "./MusicCard";

export default function SearchResults({ results }) {
    if (!results || results.length === 0) {
        return (
            <div className="search-no-results pixel-container">
                <p>No results found.</p>
            </div>
        )
    }

    return (
        <div className="search-results-container">
            <h2 className="pixel-heading">Search Results</h2>
            <div className="search-results-grid">
                {results.map((video) => (
                    <MusicCard key={video.videoId} video={video} />
                ))}
            </div>
        </div>
    )
}