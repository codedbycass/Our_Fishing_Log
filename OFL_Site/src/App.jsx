import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Collaborators from './pages/Collaborators'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
