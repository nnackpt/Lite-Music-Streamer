'use client'

import { useEffect, useRef } from "react"
import YouTube from "react-youtube"
import { usePlayer } from "@/lib/playerContext"
import Controls from "./Controls"
import UrlInput from "./UrlInput"

export default function Player() {
    const { currentVideo, isPlaying, setIsPlaying, playNext } = usePlayer()
    const playerRef = useRef(null)

    // setting for YouTube Player
    const opts = {
        height: '240',
        width: '100%',
        playerVars: {
            autoplay: isPlaying ? 1 : 0,
            controls: 0,
            modestbranding: 1,
        }
    }

    const onPlayerReady = (event) => {
        playerRef.current = event.target
        if (isPlaying) {
            event.target.playVideo()
        }
    }

    const onPlayerStateChange = (event) => {
        if (event.data === YouTube.PlayerState.ENDED) {
            playNext()
        }

        setIsPlaying(event.data === YouTube.PlayerState.PLAYING)
    }

    useEffect(() => {
        if (!playerRef.current) return

        if (isPlaying) {
            playerRef.current.playVideo()
        } else {
            playerRef.current.pauseVideo()
        }
    }, [isPlaying])

    return (
        <div className="player-container pixel-container">
            <UrlInput />

            {currentVideo ? (
                <div className="player-video-container">
                    <div className="player-frame">
                        <YouTube 
                            videoId={currentVideo.videoId}
                            opts={opts}
                            onReady={onPlayerReady}
                            onStateChange={onPlayerStateChange}
                            className="youtube-player"
                        />
                    </div>

                    <div className="player-info">
                        <h2 className="pixel-text truncate">{currentVideo.title}</h2>
                        <p className="pixel-text-sm truncate">{currentVideo.channel}</p>
                    </div>

                    <Controls />
                </div>
            ) : (
                <div className="player-empty">
                    <p className="pixel-text">Select a song to start listening</p>
                    <div className="pixel-character idle"></div>
                </div>
            )}
        </div>
    )
}