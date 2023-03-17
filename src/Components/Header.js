import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/u.png"


function Header() {
  return (
  <nav className="sticky-top navbar navbar-expand-lg bg-primary bg-gradient navbarmenu">
        <div className="container justify-content-center">
        <button 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                className="navbar-toggler"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <img className="ulogo" src={logo} alt="u logo" />
            </button>
        <div
            className="collapse navbar-collapse flex-grow-0" 
            id="navbarNav">

                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <Link to="/"  className="btn btn-warning"><span className="navnumers">F1</span>_HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq"  className="btn btn-warning"><span className="navnumers">F2</span>_FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/examples"  className="btn btn-warning"><span className="navnumers">F3</span>_EXAMPLES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sources"  className="btn btn-warning"><span className="navnumers">F4</span>_SOURCES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/videos" className="btn btn-warning"><span className="navnumers">F5</span>_VIDEOS</Link>
                    </li>
                </ul>   
        </div>
    </div>
    </nav>
  )
}

export default Header