import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Recycle from './Recycle';
import Navbar from './Navbar';
import Home from './Home';
import Survey from './Survey';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          <Route path="/" element={<Home />} />
          <Route path="/About.js" element={<Home />} />
          <Route path="/Survey.js" element={<Survey />} /> 
          <Route path="/Recycle.js" element={<Recycle />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
