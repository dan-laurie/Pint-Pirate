import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return ( 
    <>
      <div className="home-background">
        <div className="container title-screen d-flex flex-column align-items-center">
          <h1>Pint-Pirate</h1>
          <p>Find UK travel destinations based off the price of a pint! 🍺 </p>
          <Link className="btn explore-btn"to="/beers"><span>Explore</span> 🧭 </Link>
        </div>
      </div>
    </>
  )
}

export default Home