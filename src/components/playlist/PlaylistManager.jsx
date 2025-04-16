'use client';

import { usePlayer } from "@/lib/playerContext";
import PlaylistItem from "./PlaylistItem";

export default function PlaylistManager() {
    const { playlist } = usePlayer()

    if (!playlist || playlist.length === 0) {
        return (
            <div className="playlist-container pixel-container">
                <h2 className="pixel-heading">My Playlist</h2>
                <div className="playlist-empty">
                    <p className="pixel-text">Your playlist is empty</p>
                    <p className="pixel-text-sm">Press "+ Playlist" to add songs</p>
                </div>
            </div>
        )
    }

    return (
        <div className="playlist-container pixel-container">
            <h2 className="pixel-heading">My Playlist ({playlist.length})</h2>
            <div className="playlist-items">
                {playlist.map((item) => (
                    <PlaylistItem key={item.videoId} video={item} />
                ))}
            </div>
        </div>
    )
}