import React from 'react'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
