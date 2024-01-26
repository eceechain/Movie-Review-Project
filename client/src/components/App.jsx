import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from './Movies.jsx';
import About from './About.jsx'
import Home from './Home.jsx'
import Navbar  from './Navbar.jsx';
import Reviewform from './Reviewform.jsx';
import Reviews from './Reviews.jsx';
import Signup from './Signup';
import Login from './Login.jsx';

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
        <Route path='/login'element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </div>
    </Router>
  )
}

export default App