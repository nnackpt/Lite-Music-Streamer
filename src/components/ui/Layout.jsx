'use client';

import { useState } from 'react';
import { PlayerProvider } from '@/lib/playerContext';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }) {
    return (
        <PlayerProvider>
            <div className="lite-music-app">
                <header className="app-header pixel-container">
                    <div className="logo">
                        <span className="pixel-logo">🎵 Lite Music Streamer</span>
                    </div>
                    <ThemeToggle />
                </header>

                <main className="app-content">
                    {children}
                </main>

                <footer className="app-footer pixel-container">
                    <p className="pixel-text-sm">© 2025 Lite Music Streamer - 8-bit Edition</p>
                </footer>
            </div>
        </PlayerProvider>
    )
}