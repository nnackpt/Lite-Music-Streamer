'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState('light');

  const playVideo = (videoId, title, thumbnail, channel) => {
    setCurrentVideo({ videoId, title, thumbnail, channel });
    setIsPlaying(true);
  };

  const addToPlaylist = (video) => {
    const exists = playlist.some(item => item.videoId === video.videoId);
    if (!exists) {
      setPlaylist([...playlist, video]);
    }
  };

  const removeFromPlaylist = (videoId) => {
    setPlaylist(playlist.filter(item => item.videoId !== videoId));
  };

  const playNext = () => {
    if (playlist.length && currentVideo) {
      const currentIndex = playlist.findIndex(item => item.videoId === currentVideo.videoId);
      if (currentIndex < playlist.length - 1) {
        setCurrentVideo(playlist[currentIndex + 1]);
      }
    }
  };

  const playPrevious = () => {
    if (playlist.length && currentVideo) {
      const currentIndex = playlist.findIndex(item => item.videoId === currentVideo.videoId);
      if (currentIndex > 0) {
        setCurrentVideo(playlist[currentIndex - 1]);
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <PlayerContext.Provider value={{
      currentVideo,
      playlist,
      isPlaying,
      theme,
      playVideo,
      setIsPlaying,
      addToPlaylist,
      removeFromPlaylist,
      playNext,
      playPrevious,
      toggleTheme
    }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}