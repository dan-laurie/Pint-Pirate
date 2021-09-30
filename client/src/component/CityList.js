import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const CityList = () => {
  const [ cities, setCities ] = useState([])
<<<<<<< HEAD
  const [ filteredCities, setFilteredCities ] = useState([])
  const [ filters, setFilters ] = useState({ name: '', searchTerm: '' })
=======
  const [sortedCities, setSortedCities] = useState([])
>>>>>>> c67fceaa10f1811742adba8e6a0d19fa5fec88da
  const [ hasErrors, setHasErrors] = useState(false)

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

<<<<<<< HEAD
  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredCities(cities.filter(city => {
      return regexSearch.test(city.name)
    }))
  })
=======
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
>>>>>>> c67fceaa10f1811742adba8e6a0d19fa5fec88da

  return (
    <div className="beer-page">
      <h2>City List</h2>
      <div className="beer-filter">
        <select name="options" onChange={handleOptions}>
          <option value="all" defaultValue>All</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
        </select>
      </div>
      <div className="row mt-1">
        {(cities ? cities : sortedCities).map(city => {
          return (
            <>
              <div className="cities col-lg-3 mb-4 col-md-6">
                <Link className="card-link" to={`/api/cities/${city.id}`}>
                  <div key={city.name} className='card'>
                    
                    <h4 className="city-name"value={city.name}>{city.name}</h4>
                    <img className="city-image" src={city.image}></img>
                    <h6>£{(city.pint.price).toFixed(2)}</h6>
                    
                  </div>
                </Link>
              </div>
            </>
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