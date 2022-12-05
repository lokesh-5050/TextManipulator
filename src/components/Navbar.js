import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Navbar.css'

export default function Navbar(props) {
 const {handleThemes , mode} = props
 const handleThemeStyles = ()=>{
    if(mode === "#5e0c0c"){
      return `{color:'white'}`
    }
  }
  console.log(handleThemeStyles());
  return (
    <nav className={`navbar navbar-expand bg-${props.mode} align-items-center justify-content-between  `}
    //  style={{ color: props.mode === 'dark' ? 'white' : '#333' }}
    style={{color:mode === '#5e0c0c' ? 'white': mode === '#050544' ? '#fff' : mode === '#053a05' ? '#fff' : 'black'  }}
    

     >
      <div className="container-fluid d-flex   ">
        <a href='/' className="navbar-brand" 
        // style={{ color: props.mode === 'dark' ? 'white' : '#333' }}
        style={{color:mode === '#5e0c0c' ? 'white':mode === '#050544' ? '#fff' :  mode === '#053a05' ? '#fff' : mode === '#333' ? '#fff' : mode === '#fff' ? 'black' :'black'}}
        
        >{props.title}</a>

        <div className="darkmode-btn">
          {/* <div className="form-check form-switch " >
            {/* <input 
            // onClick={props.toogleDarkMode}
             className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
          {/* <label className="form-check-label" onClick={handleDarkPallets} htmlFor="flexSwitchCheckDefault">DarkMode</label> */}
          {/* </div> */}

          <div className="accordion overflow-hidden " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header d-flex" id="headingOne">
                <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  DarkMode Themes
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse position-absolute text-dark " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex gap-2 p-3 mx-3" onClick={(e)=> handleThemes(e)}>
                  <div className="cir #5e0c0c" style={{ width: "20px", height: "20px", backgroundColor: "#5e0c0c", borderRadius: "50px" }}></div>
                  <div className="cir #050544" style={{ width: "20px", height: "20px", backgroundColor: "#050544", borderRadius: "50px" }}></div>
                  <div className="cir #053a05" style={{ width: "20px", height: "20px", backgroundColor: "#053a05", borderRadius: "50px" }}></div>
                  <div className="cir #333" style={{ width: "20px", height: "20px", backgroundColor: "#333", borderRadius: "50px" }}></div>
                  <div className="cir #fff" style={{ width: "20px", height: "20px", backgroundColor: "#fff", borderRadius: "50px" }}></div>
                </div>
              </div>
            </div>

          </div>

        </div>




      </div>

    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}


// Navbar.defaultProps = {
//     title:"LokeshIsHere",
//     aboutText:"ABut us"
// } // sending default props