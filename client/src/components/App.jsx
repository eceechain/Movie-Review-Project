import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from './Movies.jsx';
import About from './About.jsx'
import Home from './Home.jsx'
import Navbar  from './Navbar.jsx';
import Reviewform from './Reviewform.jsx';
import Reviews from './Reviews.jsx';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element ={<Movies />} />
        <Route path='/about' element={<About />} />
        <Route path='/reviewform' element={<Reviewform />} />
        <Route path='/reviews' element={<Reviews />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App