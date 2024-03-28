





import './App.css'

import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Post from './components/post';
import Footer from './Footer/Footer';

function App() {
 

  return (
    <>

<BrowserRouter>

<Navbar />
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Post" element={<Post />} />

          
          

      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default App