import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Cookie from "./pages/Cookie"
import Privacy from "./pages/Privacy"

import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cookie" element={<Cookie/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
