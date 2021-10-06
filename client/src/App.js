import React from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import dotenv from 'dotenv'
dotenv.config()
import Home from './component/home/Home'
import Navbar from './component/common/Navbar'
import CityList from './component/cities/CityList'
import Login from './component/auth/login'
import Register from './component/auth/register'
import CityCard from './component/cities/CityCard'
import ReviewForm from './component/cities/ReviewForm'
import About from './component/about/About'
import Map from './component/map/Map'
import Footer from './component/common/Footer'
import Profile from './component/profile/Profile'

function App() {
  
  

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/cities'>
          <CityList />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cities/:id'>
          <CityCard />
        </Route>
        <Route exact path='/cities/:id/reviews'>
          <ReviewForm />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route>
          <Map exact path='/map'/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
