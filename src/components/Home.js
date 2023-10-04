import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Ghost Band</h1>
      <div className="home-content">
        <div className="home-image">
          {/* Agrega tus imágenes aquí */}
          <img src="https://cdns-images.dzcdn.net/images/artist/4cfad4049e78f8055bb8b5c413bb7c83/500x500.jpg" alt="Ghost Band" />
        </div>
        <div className="home-text">
          <p>
            Ghost es una banda sueca de rock fundada en 2006. Conocida por su enigmática
            presencia en el escenario y su estilo musical único, Ghost ha ganado seguidores
            en todo el mundo. Su música combina elementos de rock, metal y pop con letras
            oscuras y misteriosas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
