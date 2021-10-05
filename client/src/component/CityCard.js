import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage, getPayload } from './helpers/auth'

const CityCard = () => {
  const [city, setCity] = useState(null)
  const [hasError, setHasError] = useState(false)
  // const [ deleteReview, setDeleteReview ] = useState([])
  // const [ updateState, setUpdateState ] = React.useState()
  // const forceUpdate = React.useCallback(() => setUpdateState({}), [])
  const { id } = useParams()

  const history = useHistory()
  const token = getTokenFromLocalStorage() 
  // const revId = city.review._id

  

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

  const handleDelete = async (e) => {
    // e.preventDefault()
    const remove = e.target.name
    try {
      await axios.delete(`/api/cities/${id}/reviews/${e.target.name}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  const userIsOwner = (ownerId) => {
    const payload = getPayload()
    if (!payload) return
    return ownerId === payload.sub
  }

  // useEffect(() => {
    
  // }, [deleteReview])


  return (
    <div className="beer-page"> 
      <div>
        <Link to={'/cities'}>
          <h4 className='list-link'>Back to list</h4>
        </Link>
      </div>
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
              <h3>Where you can find it</h3>
              <ul>
                {city.pint.locations.map((city, i) => {
                  return <li key={i}>{city}</li>
                })}
              </ul>
              <Link to={`/cities/${city.id}/reviews`}>
                <h4 className='review-link'>Post a review!</h4>
              </Link>
            </div>
          </div>
          <div className="review d-flex flex-column flex-wrap">
            {city.review.length > 0 ?
              <><h2>Reviews</h2><div className="div d-flex flex-wrap">
                {city.review.map(c => {
                  const time = c.createdAt
                  
                  return (
                    <div className="review-post" key={c._id}>
                      <p>Posted By: {c.owner}</p>
                      <p className="text-post">{c.text}</p>
                      <p>Rating: {c.rating}</p>
                      <p>Posted At: {c.createdAt}</p>
                      {userIsOwner(c.owner) && 
                      <button className='delete-button' onClick={handleDelete} name={c._id}>❌</button>
                      }
                    </div>
                  )
                })}
              </div></>
              :
              <h2></h2>
            }
            
            
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