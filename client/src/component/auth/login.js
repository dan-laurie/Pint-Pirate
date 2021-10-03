import React, { useState } from 'react'
import axios from 'axios' 
import { Link, useHistory } from 'react-router-dom'

const Login = () => {

  //history
  const history = useHistory() //enables us to move pages without refresh

  // for login we only need email and password
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  // here we are updating the state of the form in order to POST this info to API
  // we spread exisiting state in and simply update with the users inputs
  // using name="" in JSX is crucial, as this can be used as the 'key'
  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token) // the token is stored in Local Storage, whoop whoop!
    history.push('/beers') //upon successful login, we are re-directed to /cheeses
  }

  const handleSubmit = async (event) => {
    event.preventDefault() //stops page reloading on submit
    try {
      const { data } = await axios.post('/api/login', formData)
      setTokenToLocalStorage(data.token) //here we dig down and get the JWT! And update that to state so it can be stored
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="site-wrapper">
      <div className="login-page">
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form  onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                <h3>Login</h3>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button className="btn btn-yellow w-100">Login</button>
                <p className="no-account">Don&apos;t have an Account? <Link to="/register"><span className="click-here">Click Here</span></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Login