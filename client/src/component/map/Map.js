import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useRef, useState } from 'react'
import MapGL from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from 'deck.gl'
import Geocoder from 'react-map-gl-geocoder'

const token = process.env.REACT_APP_MAPBOX_TOKEN

const SearchableMap = () => {
  const [ viewport, setViewPort] = useState({
    latitude: 54.6130,
    longitude: -4.1971,
    zoom: 4.64,
    transitionDuration: 100,
  })
  const [searchResultLayer, setSearchResult ] = useState(null)

  const mapRef = useRef()

  const handleOnResult = (e) => {
    console.log(e.result)
    setSearchResult( new GeoJsonLayer({
      id: 'search-result',
      data: e.result.geometry,
      getFillColor: [255, 0, 0, 128],
      getRadius: 1000,
      pointRadiusMinPixels: 10,
      pointRadiusMaxPixels: 10,
    })
    )
  }

  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }
    console.log('Updating')
    return setViewPort({
      ...viewport,
      ...geocoderDefaultOverrides,
    })
  }

  return (
    <div className="site-wrapper1">
      <div className="beer-page d-flex flex-column align-items-center">
        <div className="map-page">
          <div className="map-title">
            <h1>Discover Pubs 🔎</h1>
          </div>
          <div className="sidebar">
            Longitude: {viewport.longitude.toFixed(4)} | Latitude: {viewport.latitude.toFixed(4)} | Zoom: {viewport.zoom.toFixed(2)}
          </div>
          <div className="map-container">
            <MapGL 
              ref={mapRef}
              {...viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              width="100%"
              height="90%"
              onViewportChange={setViewPort}
              mapboxApiAccessToken={token}
            >
              <Geocoder 
                mapRef={mapRef}
                onResult={handleOnResult}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={token}
                position='top-left'
              />
              <DeckGL {...viewport} layers={[searchResultLayer]} />
            </MapGL>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchableMap