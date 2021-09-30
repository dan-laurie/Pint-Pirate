import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  //History
  // const history = useHistory()
  

  // State
  //what we need to fill out to meet APIs criteria
  // const [ formData, setFormData ] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })


  //this is needed so we can track what info is missing if we get 
  //an error sent back from the API!
  // const [ errors, setErrors ] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConfirmation: '',
  // })

  //here we are updating the state of the form in order to POST this info to API
  //we spread exisiting state in and simply update with the users inputs
  //using name="" in JSX is crucial, as this can be used as the 'key'
  // const handleChange = (event) => {
  //   const newObj = { ...formData, [event.target.name]: event.target.value }
  //   setFormData(newObj)
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {                    //using POST method as GET is DEFAULT
  //     await axios.post('https://ga-cheesebored.herokuapp.com/register', formData) // second part is the form data that has been stored in state.
  //     history.push('/login')
  //   } catch (err) {
  //     console.log('ERROR!', err.response.data.errors)
  //     setErrors(err.response.data.errors) //tells us what is wrong/missing, displayed to user in JSX
  //   }
  // }

  return (
    <div className="site-wrapper">
      <div className="register-page">
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                <h3>Register</h3>
                <div className="form-field">
                  <label htmlFor="username">Username</label>
                  <input  type="text" name="username" placeholder="Username"/>
                  {/* {errors.username && <p className="error">{errors.username}</p>} */}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input otype="email" name="email" placeholder="Email"/>
                  {/* {errors.email && <p className="error">{errors.email}</p>} */}
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="Password"/>
                  {/* {errors.password && <p className="error">{errors.password}</p>} */}
                </div>
                <div className="form-field">
                  <label htmlFor="passwordConfirmation">Password Confirmation</label>
                  <input type="password" name="passwordConfirmation" placeholder="Password Confirmation"/>
                  {/* {errors.passwordConfirmation && <p className="error">{errors.passwordConfirmation}</p>} */}
                </div>
                <button className="btn btn-yellow w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register