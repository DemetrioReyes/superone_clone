import './Heards.css'
import logo from '../../assets/img/Logo-2023-XS.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Heards() {
  const [open, setOpen] = useState(false)

  return (
    <header className="heards-header">
      <img
        src={logo}
        alt="Logo"
        className="heards-logo"
      />
      <button
        className="heards-menu-btn"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5" width="24" height="2" rx="1" fill="#222" />
          <rect y="11" width="24" height="2" rx="1" fill="#222" />
          <rect y="17" width="24" height="2" rx="1" fill="#222" />
        </svg>
      </button>
      {open && (
        <nav className="heards-menu-dropdown">
          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/productos" onClick={() => setOpen(false)}>Productos</Link>
          <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </nav>
      )}
    </header>
  )
}

export default Heards