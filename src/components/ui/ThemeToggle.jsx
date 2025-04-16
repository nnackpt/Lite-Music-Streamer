'use client';

import { usePlayer } from "@/lib/playerContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = usePlayer()

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle pixel-button"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    )
}