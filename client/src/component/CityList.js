import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CityList = () => {

  const [ cities, setCities ] = useState([])
  const [ hasErrors, setHasErrors] = useState(false)


  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios('/api/cities')
        console.log(data)
        setCities(data)
      } catch (error) {
        setHasErrors(true)
      }
    }
    getCities()
  }, [])

  return (
    <div className="beer-page">
      <h2>City List</h2>
      <div className="row mt-1">
        {cities ?

          cities.map(city => {
            return (
              <>
                <div className="cities col-lg-3 mb-4 col-md-6">
                  <Link className="card-link" to={`/api/cities/${city.id}`}>
                    <div key={city.name} className='card'>
                    
                      <h4 className="city-name"value={city.name}>{city.name}</h4>
                      <img className="city-image" src={city.image}></img>
                    
                    </div>
                  </Link>
                </div>
              </>
            )
          })
          :
          <>
            <h1>Sorry, Cannot display</h1>
          </>
        }
      </div>
    </div>
  )

}
export default CityList