import React from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import CityList from './component/CityList'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/beers'>
          <CityList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
