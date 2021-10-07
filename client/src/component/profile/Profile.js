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

  const getImage = () => {
    if (!details.image) {
      return 'https://i.imgur.com/hmWvp9e.jpg'
    } else {
      return details.image
    }
  }

  return (
    <div className="site-wrapper">
      <div className="beer-page">
        <h1 className='profile-title'>My Profile</h1>
        <div className="details d-flex justify-content-center">
          <div className="profile-pic">
            <img src={getImage()} alt="" />
          </div>
          <div className='profile-info d-flex flex-column justify-content-center'>
            <h3>👤 : {details.username}</h3>
            <h3>📧 : {details.email}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile