import './Navigation.css'

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <button 
            onClick={() => setCurrentPage('home')}
            className="logo-btn"
          >
            Rupesh Pathak
          </button>
        </div>
        <ul className="nav-menu">
          <li>
            <button 
              onClick={() => setCurrentPage('home')}
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('photos')}
              className={`nav-link ${currentPage === 'photos' ? 'active' : ''}`}
            >
              Photos
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('journals')}
              className={`nav-link ${currentPage === 'journals' ? 'active' : ''}`}
            >
              Journals
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
