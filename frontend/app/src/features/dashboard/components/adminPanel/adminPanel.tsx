import React from 'react'

import styles from './adminPanel.module.scss'

import graph from '../../images/graph.png'

const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Доска аналитики</h2>
      <img className={styles.image} src={graph} alt=''></img>
    </div>
  )
}

export default AdminPanel
