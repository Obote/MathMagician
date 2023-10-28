import './App.css';
import './component/Calculator.css';
import './component/navbar.css';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/Narbar';
import Calculator from './component/Calculator';
import DisplayQuote from './component/DisplayQuotes';
import Home from './component/Home';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quot" element={<DisplayQuote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
