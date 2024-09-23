import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './pages/About';
const App = () =>  {


  





  
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App