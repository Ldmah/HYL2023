import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Survey from './Survey';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          <Route path="/" element={<About />} />
          <Route path="/Survey.js" element={<Survey />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
