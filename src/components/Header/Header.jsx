import React from 'react';
import Switch from './Switch';
import headerStyle from './Header.css';

const Header = () => {
  return (
    <header className="header" style={headerStyle}>
      <h1>Codeunite</h1>
      {/* <Switch /> */}
    </header>
  );
};

export default Header;
