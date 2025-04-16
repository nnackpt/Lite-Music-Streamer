'use client';

import { usePlayer } from "@/lib/playerContext";

export default function PlaylistItem({ video }) {
    const { playVideo, removeFromPlaylist, currentVideo } = usePlayer()
    const isActive = currentVideo && currentVideo.videoId === video.videoId

    const handlePlay = () => {
        playVideo(video.videoId, video.title, video.thumbnail, video.channel)
    }

    const handleRemove = (e) => {
        e.stopPropagation()
        removeFromPlaylist(video.videoId)
    }

    return (
        <div
            className={`playlist-item pixel-container ${isActive ? 'active' : ''}`}
            onClick={handlePlay}
        >
            <div className="playlist-item-thumbnail">
                <img src={video.thumbnail || '/images/default-thumbnail.png'} alt={video.title} className="pixel-image" />
                {isActive && <div className="now-playing">▶️</div>}
            </div>
            <div className="playlist-item-info">
                <h3 className="truncate">{video.title || 'No Title'}</h3>
                <p className="truncate text-sm">{video.channel || ''}</p>
            </div>
            <button
                onClick={handleRemove}
                className="pixel-button remove-btn"
            >
                ❌
            </button>
        </div>
    )
}