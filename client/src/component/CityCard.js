import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const CityCard = () => {
  const [city, setCity] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getCity = async () => {
      try {
        const { data } = await axios(`/api/cities/${id}`)
        setCity(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
        console.log(err)
      }
    }
    getCity()
  },[id])
  return (
    <div className="beer-page"> 
      {city ?
        <><div className="container-city">
          <div className="city-info d-flex">
            <div className="city-bio">
              <h2>{city.name}</h2>
              <p>{city.bio}</p>
            </div>
            <div className="city-image-single d-flex">
              <img className="city-pic" src={city.image} alt={city.name} />
            </div>
          </div>
          <div className="beers-side d-flex justify-content-center">
            <div className="beer-pic">
              <img className="beer-pic-image" src={city.pint.image} alt={city.pint.name} />
            </div>
            <div className="beer-info">
              <h2>{city.pint.name}</h2>
              <p>£{city.pint.price.toFixed(2)}</p>
              <p>{city.pint.abv}%</p>
              <p>{city.pint.bio}</p>
              <ul>
                {city.pint.locations.map((city, i) => {
                  return <li key={i}>{city}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        </>
        :
        <>
          {hasError ? 
            <h2>Something Went Wrong</h2> 
            :
            <h2>Loading</h2>
          }
        </>
      }
      
    </div>
    
  )
}

export default CityCard