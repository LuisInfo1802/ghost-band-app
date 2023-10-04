import React, { useState, useEffect } from 'react';
import '../styles/Songs.css'; // Importa los estilos CSS específicos para Songs

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Llamada a la API para obtener las canciones
    const fetchData = async () => {
      try {
        const response = await fetch('https://res-api-ghost-production.up.railway.app/api/songs'); // Reemplaza con tu URL de la API
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  const filteredSongs = songs.filter(song => {
    return song.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="songs-container">
      <h1 className="songs-title">Songs of Ghost</h1>
      <input
        type="text"
        placeholder="Search the song by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="song-list">
        {filteredSongs.map((song) => (
          <div className="song-item" key={song.idSong}>
            <img src={song.image} alt={song.title} className="song-image" />
            <div className="song-details">
              <h2 className="song-title">{song.title}</h2>
              <p>Duration</p>
              <p className="song-duration">{song.duration} Minutes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
