import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Main.module.scss'
import { Loader } from 'components/UI'

const Main = (props: PropsFromRedux) => {
  const { loading } = props

  return <div className={styles.wrapper}>{!loading ? <Loader /> : <div className={styles.inner}>Home Page</div>}</div>
}

export default connector(Main)
