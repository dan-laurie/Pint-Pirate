import React, { useState, useEffect } from 'react'
import { getTokenFromLocalStorage } from '../helpers/auth'
import axios from 'axios'

const Profile = () => {

  const token = getTokenFromLocalStorage()

  const [ details, setDetails ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setDetails(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  
  }, [token])


  return (
    <div className="site-wrapper">
      <div className="beer-page">
        <h1>My Profile</h1>
        <div className="details">
          <div className="profile-pic">
            <img src={details.image} alt="" />
          </div>
          <h3>Username: {details.username}</h3>
          <h3>Email: {details.email}</h3>
        </div>

      </div>
    
    </div>
  )
}

export default Profile