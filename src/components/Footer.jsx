import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <p>outdors &copy; {new Date().getFullYear()} Utsav Kafley</p>
    </div>
  </footer>
);

export default Footer;
