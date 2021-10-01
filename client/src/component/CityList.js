import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const CityList = () => {
  const [ cities, setCities ] = useState([])
  const [sortedCities, setSortedCities] = useState([])
  const [ hasErrors, setHasErrors] = useState(false)
  const [ filters, setFilters ] = useState({ searchTerm: '' })
  const [ filteredCities, setFilteredCities ] = useState([])

  const [prices, setPrices] = useState([])


  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios('/api/cities')
        setCities(data)
        // console.log(data)
      } catch (error) {
        setHasErrors(true)
      }
    }
    getCities()
  }, [])

  const handleOptions = (e) => {
    if (e.target.value === 'lh'){
      const lowCities = cities.sort((a, b) => {
        return ((a.pint.price > b.pint.price) ? 1 : -1 )
      })
      setSortedCities(lowCities)
      console.log(sortedCities)
    } else if (e.target.value === 'hl'){
      const highCities = cities.sort((a, b) => {
        return ((a.pint.price < b.pint.price) ? 1 : -1 )
      })
      setSortedCities(highCities)
      console.log(sortedCities)
    } else if (e.target.value === 'all') {
      setSortedCities(cities)
      console.log(sortedCities)
    }
    return
  }

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredCities(cities.filter(city => {
      return regexSearch.test(city.name)
    }))
  }, [filters, cities])

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }

  return (
    <div className="beer-page">
      <h2>City List</h2>
      <div className="beer-filter">
        <input onChange={handleFilterChange} name="searchTerm" value={filters.searchTerm} placeholder='Search City 🔎' className='filter-type'/>
        <select name="options" onChange={handleOptions} className='sort'>
          <option value="all" defaultValue>All</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
        </select>
      </div>
      
      <div className="row mt-1">
        {(filteredCities ? filteredCities : cities).map(city => {
          return (
            <div key={city.name} className="cities col-lg-3 mb-4 col-md-6">
              <Link className="card-link" to={`/api/cities/${city.id}`}>
                <div className='card'>
                  
                  <h4 className="city-name"value={city.name}>{city.name}</h4>
                  <img className="city-image" src={city.image}></img>
                  <h6>£{(city.pint.price).toFixed(2)}</h6>
                  
                </div>
              </Link>
            </div>
          )
        })}
          :
        <>
          <h1>Sorry, Cannot display</h1>
        </>
      </div>
    </div>
  )

}
export default CityList