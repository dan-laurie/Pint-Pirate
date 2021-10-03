import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from './Search'
import { userIsAuthenticated } from './helpers/auth'

const CityList = () => {
  const [ cities, setCities ] = useState([])
  const [ hasErrors, setHasErrors] = useState(false)
  const [ filteredCities, setFilteredCities ] = useState([])

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios('/api/cities')
        setCities(data)
      } catch (error) {
        setHasErrors(true)
      }
    }
    getCities()
  }, [])

  const handleOptions = (e) => {
    let citiesToAdd = [...cities]
    if (e.target.value === 'lh') {
      const lowCities = citiesToAdd.sort((a, b) => {
        return ((a.pint.price > b.pint.price) ? 1 : -1)
      })
      citiesToAdd = [...lowCities]
      setFilteredCities(citiesToAdd)
    }
    if (e.target.value === 'hl') {
      const highCities = citiesToAdd.sort((a, b) => {
        return ((a.pint.price > b.pint.price) ? -1 : 1)
      })
      console.log(highCities)
      citiesToAdd = [...highCities]
      setFilteredCities(citiesToAdd)
    }
    if (e.target.value === 'all') { 
      const citiesSetToAll = [...cities]
      setFilteredCities(citiesSetToAll)
    }
  }

  return (
    <div className="beer-page">
      <h2>City List</h2>
      <div className="beer-filter">
        <Search cities={cities} setFilteredCities={setFilteredCities} />
        <select className="sort" name="options" onChange={handleOptions}>
          <option value="all" defaultValue>All</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
        </select>
      </div>
      <div className="row mt-1">
        {(filteredCities.length > 0 ? filteredCities : cities).map(city => {
          return (
            <div className="cities col-lg-3 mb-4 col-md-6" key={city.id}>
              { userIsAuthenticated() ?
                <Link className="card-link" to={`/beers/${city.id}`}>
                  <div  className='card'> 
                    <h4 className="city-name"value={city.name}>{city.name}</h4>
                    <img className="city-image" src={city.image}></img>
                    <h6>£{(city.pint.price).toFixed(2)}</h6>
                  </div>
                </Link>
                :
                <Link className="card-link" to={'/login'}>
                  <div  className='card'> 
                    <h4 className="city-name"value={city.name}>{city.name}</h4>
                    <img className="city-image" src={city.image}></img>
                    <h6>£{(city.pint.price).toFixed(2)}</h6>
                  </div>
                </Link>
              }
            </div>
          )
        })} 
      </div>
    </div>
  )
}
export default CityList