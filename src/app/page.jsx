'use client';

import { useState } from "react";
import Layout from "@/components/ui/Layout";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import Player from "@/components/player/Player";
import PlaylistManager from "@/components/playlist/PlaylistManager";

export default function Home() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <Layout>
      <div className="app-container">
        <div className="search-section">
          <SearchBar onSearchResults={setSearchResults} />
          {searchResults.length > 0 && <SearchResults results={searchResults} />}
        </div>

        <div className="player-section">
          <Player />
        </div>

        <div className="playlist-section">
          <PlaylistManager />
        </div>
      </div>
    </Layout>
  )
}