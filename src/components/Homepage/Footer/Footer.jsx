import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://twitter.com/j_amakiri">twitter</a>
      <a href="https://github.com/josemak25">github</a>
      <a href="https://codepen.io/josemak25/">codepen</a>
    </footer>
  );
};

export default Footer;
