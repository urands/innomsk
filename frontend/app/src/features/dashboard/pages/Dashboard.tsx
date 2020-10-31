import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Dashboard.module.scss'
import { MainLayout } from 'components/MainLayout'
import { Map, InspectorPanel, ManagerPanel, AdminPanel } from '../components'

const Dashboard = (props: PropsFromRedux) => {
  const { role } = props

  const renderPanel = () => {
    if (role === 'inspector') {
      return <InspectorPanel />
    } else if (role === 'admin') {
      return <AdminPanel />
    } else if (role === 'manager') {
      return <ManagerPanel />
    }
  }

  const renderMap = () => {
    if (role === 'inspector') {
      return <Map />
    } else if (role === 'inspector') {
      return <Map />
    }
  }

  return (
    <MainLayout role={role}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            {renderPanel()}
            {role === 'inspector' || role === 'inspector' ? (
              <div className={styles.wrapperMap}>{renderMap()}</div>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default connector(Dashboard)
