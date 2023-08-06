import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">{props.Features}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.ToggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
Navbar.propTypes={
    Home:PropTypes.string,
    Features:PropTypes.string
}
Navbar.defaultProps={
    Home:'harmpic vai 51',
    Features:'20 rs'
}
