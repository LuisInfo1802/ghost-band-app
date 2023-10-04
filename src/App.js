import React, { useState } from 'react';
import './styles/App.css'; // Importa los estilos CSS

import Songs from './components/Songs';
import Albums from './components/Albums';
import Members from './components/Members';

import Home from './components/Home.js'

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'albums':
        return <Albums />;
      case 'members':
        return <Members />;
      case 'songs':
        return <Songs/>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header>
        <h1>Ghost Band App API REST</h1>
        <p className='subtitle'>All about the about the band Ghost</p>
      </header>
      <nav>
        <button  onClick={() => setActiveComponent('home')}>Home</button>
        <button onClick={() => setActiveComponent('songs')}>Songs</button>
        <button onClick={() => setActiveComponent('albums')}>Albums</button>
        <button onClick={() => setActiveComponent('members')}>Members</button>
      </nav>
      <div className="content">
        {renderComponent()}
      </div>
      <footer>All rights reserved Luis Angel Sanchez 2023</footer>

    </div>

  );
};

export default App;
