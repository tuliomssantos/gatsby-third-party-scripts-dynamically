import React, { useState, useEffect } from 'react'
import loadGMaps from '../services/loadGMaps'

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadGMaps(() => {
      setLoaded(true);
    })
  })

  return (
    <div>
      <h1>Home Page</h1>
      <p style={{color: loaded ? 'green' : 'red'}} >{loaded ? 'Google Maps Script Loaded' : 'Loading Google Maps Script'}</p>
    </div>
  )
}

export default Index
