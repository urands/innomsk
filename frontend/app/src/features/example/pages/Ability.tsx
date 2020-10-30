import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Ability.module.scss'
import spinner from 'assets/img/spinner.gif'
import AbilityItem from '../components/AbilityItem/AbilityItem'

const Ability = (props: PropsFromRedux) => {
  const { loading } = props

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <img src={spinner} alt='loading' className={styles.img} />
      </div>
    </div>
  )
}

export default connector(Ability)
