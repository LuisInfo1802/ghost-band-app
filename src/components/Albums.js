import React, { useState, useEffect } from 'react';
import '../styles/Albums.css';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  useEffect(() => {
    // Llamada a la API para obtener los álbumes
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://res-api-ghost-production.up.railway.app/api/albums'); // Reemplaza con tu URL de la API
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredAlbums = albums.filter(album=>{
    return album.nameAlbum.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="albums-container">
      <h1 className="albums-title">Albums</h1>
      <input type='text'
      placeholder='Search the Album for name'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      className='search-input'>
      </input>
      
      
      <div className='album-list'>
      {filteredAlbums.map(album => (

      
        <div className="album-item" key={album.idAlbum}>
          <img src={album.image} alt={album.nameAlbum} className="album-image" />
          <div className="album-details">
            <h2 className="album-name">{album.nameAlbum}</h2>
            <p className='album-info'>Songs</p>
            <p className="album-date">{album.numSongs}</p>
            <p className='album-info'>Date Published</p>
            <p className="album-date">{formatDate(album.date_published)}</p>
      
          </div>
          
        </div>
       
      ))}
    </div>
    </div>
   
  );
};

export default Albums;
