import React, { ReactNode } from 'react'

import styles from './MainLayout.module.scss'

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}

export default MainLayout
