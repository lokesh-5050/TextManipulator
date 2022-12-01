import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Navbar.css'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-${props.mode} bg-${props.mode} align-items-center `} style={{color:props.mode === 'dark'?'white':'#333'}}>
  <div className="container-fluid d-flex">
    <a href='/' className="navbar-brand"  style={{color:props.mode === 'dark'?'white':'#333'}}>{props.title}</a>
    <div className="form-check form-switch" >
        <input onClick={props.toogleDarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div>
    <button className="navbar-toggler-text-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a href='/' className="nav-link active" aria-current="page" style={{color:props.mode === 'dark'?'white':'#333'}}>Home</a>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link active" aria-current="page" style={{color:props.mode === 'dark'?'white':'#333'}}>{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
</nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

  Navbar.propTypes = {
      title:PropTypes.string.isRequired,
      aboutText:PropTypes.string.isRequired
 }


// Navbar.defaultProps = {
//     title:"LokeshIsHere",
//     aboutText:"ABut us"
// } // sending default props