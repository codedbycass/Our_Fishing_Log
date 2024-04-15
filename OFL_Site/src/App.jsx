import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Collaborators from './pages/Collaborators'
import Donate from "./pages/Donate"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
