import React, { useState, useEffect } from 'react';
import apiClient from '../../spotify'; // Ensure the path to spotify.js is correct
import './Feed.css'; // Assuming you have a CSS file for styling

const MusicFeed = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch new releases (top albums)
    apiClient
      .get('/browse/new-releases?limit=6')
      .then((response) => {
        console.log(response.data.albums.items); 
        const fetchedAlbums = response.data.albums.items.map((album) => ({
          title: album.name,
          cover: album.images[0]?.url,
          size: 'medium' // Default size (you can adjust this)
        }));
        setAlbums(fetchedAlbums);
      })
      .catch((error) => console.error('Error fetching top albums:', error));
  }, []);

  return (
    <div className="music-feed">
      {albums.map((album, index) => (
        <div key={index} className={`music-card ${album.size}`}>
          <img src={album.cover} alt={album.title} />
          <h3>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MusicFeed;
