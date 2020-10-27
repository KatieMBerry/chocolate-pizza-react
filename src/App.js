import React, { Component } from 'react';
import Header from './Header.js';
import MainContent from './Main-Content.js';
import './App.css';
import IngredientsList from './IngredientsList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainContent />
        <IngredientsList />
        <Footer />
      </div >
    );
  }
}


