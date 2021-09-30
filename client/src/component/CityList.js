import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CityList = () => {

  const [ cities, setCities ] = useState([])
  const [ hasErrors, setHasErrors] = useState(false)


  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios.get('/cities')
        setCities(data)
      } catch (error) {
        setHasErrors(true)
      }
      getCities()
    }
  }, [])

  return (
    <>
      {cities.map(city => {
        return (
          <>
            <div key={city._id} className='city-card'>
              <Link key={city._id} to={`/cities/${city.id}`}>
                <p value={city.name}>{city.name}</p>
                <img src={city.image}>{city.image}</img>
              </Link>
            </div>
          </>
        )
      })}
    </>
  )

}
export default CityList