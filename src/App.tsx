import './App.css'
import Heards from './components/Heards/Heards'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Heards />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/inicio" element={<Body />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
