import React, { useRef, useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'
const Map = props => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef()
  const { center, zoom, mapStyle } = props
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlld29vZGZoamZ1cmkiLCJhIjoiY2s3NDBhaHdyMDB1ODNydWk5YXA3MHN6ayJ9.r8E0-pbUGF9iT8mzMGsNnw'
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle, // stylesheet location
        center: center,
        zoom: zoom
      })

      map.on('load', () => {
        setMap(map)
        map.resize()
      })
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [map, center, zoom, mapStyle])
  return <div ref={el => (mapContainer.current = el)} className={`map ${props.className}`} style={props.styles} />
}

export default Map
