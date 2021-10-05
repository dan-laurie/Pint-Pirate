import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import mapboxgl, { Marker } from '!mapbox-gl'

const Map = () => {

  const [ cities, setCities ] = useState([])

  useEffect(() => {
    const getCities = async () => {
      try {
        const { data } = await axios('/api/cities')
        setCities(data)
      } catch (err) {
        console.log(err)
      }
    }
    getCities()
  }, [])

  

  mapboxgl.accessToken = 'pk.eyJ1IjoiY3V0ZS1jdWJlcyIsImEiOiJja3VkMDhoZ2UwcDk5MnhtdG15M290endsIn0.BtQbQm2o3qjqcDmQgx0urw'
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-3.7955)
  const [lat, setLat] = useState(54.5077)
  const [zoom, setZoom] = useState(4.88)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  }
  )

  return (
    <div className="site-wrapper1">
      <div className="beer-page d-flex flex-column align-items-center">
        <div className="map-title">
          <h1>Discover Pubs 🔎</h1>
        </div>
        <div className="map-box d-flex flex-column align-items-center justify-content-center">
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container"/>
        </div>
      </div>
    </div>
  )
}

export default Map 