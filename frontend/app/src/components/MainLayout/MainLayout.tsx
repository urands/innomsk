import React, { ReactNode } from 'react'

import styles from './MainLayout.module.scss'

type Props = {
  children: ReactNode
  roll: string
}

const MainLayout = (props: Props) => {
  const { children, roll } = props

  const TypeProfile = () => {
    if (roll === 'admin') {
      return <h3 className={styles.title}>Аналитик</h3>
    } else if (roll === 'manager') {
      return <h3 className={styles.title}>Руководитель подразделения</h3>
    } else if (roll === 'inspector') {
      return <h3 className={styles.title}>Инспектор</h3>
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{TypeProfile()}</header>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default MainLayout
