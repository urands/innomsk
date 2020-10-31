import React, { ReactNode } from 'react'
import { useHistory } from 'react-router'
import { connector, PropsFromRedux } from './container'

import styles from './MainLayout.module.scss'

type Props = {
  children: ReactNode
  role: string | null
} & PropsFromRedux

const MainLayout = (props: Props) => {
  const { children, role, logout } = props
  const history = useHistory()

  const TypeProfile = () => {
    if (role === 'admin') {
      return <h3 className={styles.title}>Аналитик</h3>
    } else if (role === 'manager') {
      return <h3 className={styles.title}>Руководитель подразделения</h3>
    } else if (role === 'inspector') {
      return <h3 className={styles.title}>Инспектор</h3>
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {TypeProfile()}
        <div className={styles.actions}>
          <p className={styles.help}>Помощь</p>
          <div className={styles.separate}></div>
          <p
            className={styles.exit}
            onClick={() => {
              logout()
              history.push('/')
            }}
          >
            Выход
          </p>
        </div>
      </header>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default connector(MainLayout)
