import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

// components
import Header from './components/Header/Header';
import { Footer } from './components/Footer/index';
import HomePage from './components/Home/Home';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <div className="App">
        <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
          </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
