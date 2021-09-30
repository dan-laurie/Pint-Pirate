import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-sm">
        <div className="container">
          {/*Cheese Logo*/}
          <div className="navbar-brand">
            <Link to="/"><i className="fas fa-beer"></i></Link>
          </div>
          {/* Nav Bar */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
            {/* <li className="nav-item">
              <span onClick={handleLogout}>Logout</span>
            </li> */}
          </ul>
        </div>
      </div>










    </>
  ) 
}

export default Navbar