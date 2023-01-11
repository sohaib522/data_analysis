import React from 'react'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "../index.css"
mapboxgl.accessToken = 'pk.eyJ1Ijoic29oYWlienEiLCJhIjoiY2xjcmMya3pyMGNhejN2cDNrcnkxMWR3YSJ9.6XP1gWs4Y19V_Y-MSG6NiA';

export default function Draw_Map() {
    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(70.41);
const [lat, setLat] = useState(29.47);
const [zoom, setZoom] = useState(9);
useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
<div>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div>
  )
}
