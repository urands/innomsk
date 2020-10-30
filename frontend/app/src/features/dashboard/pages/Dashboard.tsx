import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Single.module.scss'

const Dashboard = (props: PropsFromRedux) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>Dashboard Page</div>
      </div>
    </div>
  )
}

export default connector(Dashboard)
