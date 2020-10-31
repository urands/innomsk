import React from 'react'

import styles from './Loader.module.scss'

import { Loading } from 'assets/img'

const Loader = () => (
  <div className={styles.wrapper}>
    <img src={Loading} alt='loading' />
  </div>
)

export default Loader
