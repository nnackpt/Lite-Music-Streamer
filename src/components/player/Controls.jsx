'use client';

import { usePlayer } from "@/lib/playerContext";

export default function Controls() {
    const { isPlaying, setIsPlaying, playNext, playPrevious } = usePlayer()

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="player-controls">
            <button onClick={playPrevious} className="pixel-button control-btn">
                ⏮️ Previous
            </button>

            <button onClick={togglePlay} className="pixel-button control-btn play-btn">
                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            <button onClick={playNext} className="pixel-button control-btn">
                ⏭️ Next
            </button>
        </div>
    )
}