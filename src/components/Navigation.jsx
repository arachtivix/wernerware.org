import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          WernerWare
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/chess" 
              className={location.pathname === '/chess' ? 'nav-link active' : 'nav-link'}
            >
              Chess
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation