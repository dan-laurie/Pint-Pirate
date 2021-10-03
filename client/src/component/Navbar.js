import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload, userIsAuthenticated } from './helpers/auth'

const Navbar = () => {

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])


  console.log('User is authenticated -->', userIsAuthenticated())

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }



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
              <Link to="/about">About</Link>
            </li>
            { 
              userIsAuthenticated() ?
                <>
                  <li className="nav-item">
                    <span className="logout"onClick={handleLogout}>Logout</span>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register">Register</Link>
                  </li>
                </>
            }


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