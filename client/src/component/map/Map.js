import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'

const Map = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY3V0ZS1jdWJlcyIsImEiOiJja3VkMDhoZ2UwcDk5MnhtdG15M290endsIn0.BtQbQm2o3qjqcDmQgx0urw'
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-4.5596)
  const [lat, setLat] = useState(53.8987)
  const [zoom, setZoom] = useState(5.87)

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
    <div className="beer-page">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default Map 