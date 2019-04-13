import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {
        <img
          src="http://christinadob.com/todo/media/shelfie_icon.png"
          alt="logo"
        />
      }
      <h1>Sim 1</h1>
    </header>
  );
};

export default Header;
