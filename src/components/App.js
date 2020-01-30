import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';
import './App.css';
import './reset.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}
