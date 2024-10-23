import React, { useState, useEffect } from 'react';
import apiClient from '../../spotify'; // Ensure the path to spotify.js is correct
import './Feed.css'; // Assuming you have a CSS file for styling

const MusicFeed = () => {
  const [albums, setAlbums] = useState([]);
  const [topChart, setTopChart] = useState(null); // New state for the top chart album

  useEffect(() => {
    // Fetch new releases (top albums)
    apiClient
      .get('/browse/new-releases?limit=6')
      .then((response) => {
        const fetchedAlbums = response.data.albums.items.map((album) => ({
          title: album.name,
          cover: album.images[0]?.url,
          artist: album.artists[0].name, // Fetch artist name
          releaseDate: album.release_date, // Fetch release date
          totalTracks: album.total_tracks, // Fetch total number of tracks
          size: 'medium-card', // Changed class name to match CSS
        }));
        setAlbums(fetchedAlbums);
      })
      .catch((error) => console.error('Error fetching top albums:', error));

    // Fetch top charts (assuming endpoint for top charts)
    apiClient
      .get('/browse/featured-playlists?limit=1') // Fetching a top chart playlist
      .then((response) => {
        const topAlbum = response.data.playlists.items[0];
        setTopChart({
          title: topAlbum.name,
          cover: topAlbum.images[0]?.url,
          description: topAlbum.description, // Including description
          numTracks: topAlbum.tracks.total, // Including number of tracks
          size: 'large', // This is for top-chart cover
        });
      })
      .catch((error) => console.error('Error fetching top chart album:', error));
  }, []);

  return (
    <div className="music-feed-container">
      <div className="music-feed">
        {albums.map((album, index) => (
          <div key={index} className={`album-card ${album.size}`}>
            <img src={album.cover} alt={album.title} />
            <h3 className="detaill">{album.title}</h3>
            {/* Album Details */}
            <p className="album-artist">Artist: {album.artist}</p>
            <p className="album-release-date">Release Date: {album.releaseDate}</p>
            <p className="album-total-tracks">Tracks: {album.totalTracks}</p>
          </div>
        ))}
      </div>
      {topChart && (
        <div className="top-chart-container">
          <img
            src={topChart.cover}
            alt={topChart.title}
            className="top-chart-cover"
          />
          <h2 className="top-chart-title">{topChart.title}</h2>
          <p className="album-description">{topChart.description}</p>
          <p className="album-details">Tracks: {topChart.numTracks}</p>
        </div>
      )}
    </div>
  );
};

export default MusicFeed;
