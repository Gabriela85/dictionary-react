import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
    <div className="container">

      <main>
      <h1>DICTIONARY</h1>
        <Dictionary />
      </main>
      <footer>
      Coded by <a href="https://github.com/Gabriela85/dictionary-react" target="_blank" rel="noopener noreferrer"> Gabriela Resslova </a>
   </footer>
   </div>
   </div>
  );
}

