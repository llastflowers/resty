import React, { Component } from 'react';
import styles from './App.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <section>
          <h1>PATCHy</h1>
        </section>
      </header>
    );
  }
}

export default Header;
