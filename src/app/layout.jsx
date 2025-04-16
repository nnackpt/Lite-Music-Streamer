import '@/styles/globals.css';
import { Html } from 'next/document';

export const metadata = {
  title: 'Lite Music Streamer - 8-bit Music Player',
  description: 'Play a song from YouTube in 8-bit styles',
  keywords: 'music, 8-bit, youtube, player, playlist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}