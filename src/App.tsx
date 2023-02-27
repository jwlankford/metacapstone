import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Header
        <nav>
            <ul className="menu">
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="/about">About</a></li> 
                <li className="menu-item"><a href="/contact">Contact</a></li> 
            </ul>
        </nav>
        </header>
        <main>Main</main>
        <footer>Footer</footer>
    </div>
  );
}

export default App;
