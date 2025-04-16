'use client';

import { useState } from "react";
import { usePlayer } from "@/lib/playerContext";
import { extractVideoId } from "@/lib/youtube";

export default function UrlInput() {
    const [url, setUrl] = useState('')
    const { playVideo } = usePlayer()

    const handleSubmit = (e) => {
        e.preventDefault()

        const videoId = extractVideoId(url)
        if (videoId) {
            playVideo(videoId, 'Song from YouTube', '', '')
            setUrl('')
        } else {
            alert('Invalid YouTube URL')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="url-input-container">
            <div className="pixel-container url-input-wrapper">
                <input 
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter YouTube URL here..."
                    className="pixel-input" 
                />
                <button type="submit" className="pixel-button url-submit-btn">
                    ▶️ Play
                </button>
            </div>
        </form>
    )
}