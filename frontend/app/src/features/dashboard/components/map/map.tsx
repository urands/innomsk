import React from 'react'
import Map_ from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

import styles from './map.module.scss'

const Map = () => {
  return <div id='map' className={styles.map}></div>
}

export default Map
