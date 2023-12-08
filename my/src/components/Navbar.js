import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <a className="navbar-brand text-white" href="#">{props.logo}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="collapse navbar-collapse px-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
          </div>
      </nav>
    </div>
    </>
  )
}   

Navbar.propTypes = {
  logo: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  logo: 'Set Title'
};