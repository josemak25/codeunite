import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ postPage }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 style={postPage ? { color: '#ffa7c4' } : undefined}>Codeunite</h1>
      </Link>
    </header>
  );
};

export default Header;
