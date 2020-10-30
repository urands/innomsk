import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Dashboard.module.scss'
import { MainLayout } from 'components/MainLayout'
import { Map } from '../components'

const Dashboard = (props: PropsFromRedux) => {
  const roll = 'inspector'

  return (
    <MainLayout roll={roll}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.panel}>Panel</div>
            <div className={styles.wrapperMap}>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(Dashboard)
