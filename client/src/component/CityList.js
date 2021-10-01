import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from './Search'


const CityList = () => {
  const [ cities, setCities ] = useState([])
  const [sortedCities, setSortedCities] = useState([])
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
    setSortedCities([])
    if (e.target.value === 'lh'){
      const lowCities = cities.sort((a, b) => {
        return ((a.pint.price > b.pint.price) ? 1 : -1 )
      })
      setSortedCities(lowCities)
      console.log('lh',sortedCities)
    } else if (e.target.value === 'hl'){
      const highCities = cities.sort((a, b) => {
        return ((a.pint.price < b.pint.price) ? 1 : -1 )
      })
      setSortedCities(highCities)
      console.log('hl',sortedCities)
    } else if (e.target.value === 'all') {
      setSortedCities(cities)
      console.log('all', cities)
    }
    return
  }


  return (
    <div className="beer-page">
      <h2>City List</h2>
      <div className="beer-filter">
        <Search cities={cities} setFilteredCities={setFilteredCities} />
        <select name="options" onChange={handleOptions} className='sort'>
          <option value="all" defaultValue>All</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
        </select>
      </div>
      
      
      <div className="row mt-1">

                  
        {(filteredCities.length > 0 ? filteredCities.map(city => {
          return (
            <div className="cities col-lg-3 mb-4 col-md-6" key={city.id}>
              <Link className="card-link" to={`/api/cities/${city.id}`}>
                <div  className='card'> 
                  <h4 className="city-name"value={city.name}>{city.name}</h4>
                  <img className="city-image" src={city.image}></img>
                  <h6>£{(city.pint.price).toFixed(2)}</h6>
                </div>
              </Link>
            </div>
          )
        })
          :
          (cities ? cities : (sortedCities.length > 0 ? sortedCities : cities)).map(city => {
            return (
              <div className="cities col-lg-3 mb-4 col-md-6" key={city.id}>
                <Link className="card-link" to={`/api/cities/${city.id}`}>
                  <div  className='card'> 
                    <h4 className="city-name"value={city.name}>{city.name}</h4>
                    <img className="city-image" src={city.image}></img>
                    <h6>£{(city.pint.price).toFixed(2)}</h6>
                  </div>
                </Link>
              </div>
            )
          }))}
      </div>
    </div>
  )
}
export default CityList