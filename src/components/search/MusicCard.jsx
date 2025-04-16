'use client';

import { usePlayer } from "@/lib/playerContext";

export default function MusicCard({ video }) {
    const { playVideo, addToPlaylist } = usePlayer()

    const handlePlay = () => {
        playVideo(video.videoId, video.title, video.thumbnail, video.channel)
    }

    const handleAddToPlaylist = (e) => {
        e.stopPropagation()
        addToPlaylist(video)
    }

    return (
        <div className="music-card pixel-container" onClick={handlePlay}>
            <div className="music-card-thumbnail">
                <img src={video.thumbnail} alt={video.title} className="pixel-image" />
                <div className="play-overlay">▶️</div>
            </div>
            <div className="music-card-info">
                <h3 className="truncate text-lg">{video.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{video.channel}</p>
            </div>
            <button
                onClick={handleAddToPlaylist}
                className="pixel-button add-playlist-btn"
            >
                + Playlist
            </button>
        </div>
    )
}