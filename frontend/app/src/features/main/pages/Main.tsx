import React from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Main.module.scss'
import { Loader } from 'components/UI'

const Main = (props: PropsFromRedux) => {
  const { loading } = props

  return (
    <div className={styles.wrapper}>
      {!loading ? (
        <Loader />
      ) : (
        <div className={styles.inner}>
          <form className={styles.auth}>
            <div className={styles.logo}></div>
            <h2 className={styles.header}>ЕДИНОЕ ГЕОИНФОРМАЦИОННОЕ ПРОСТРАНСТВО ГОРОДА МОСКВЫ</h2>
            <div className={styles.input}>
              <input className={styles.login}></input>
              <input className={styles.password}></input>
              <a className={styles.foggoten} href='##'>
                Забыли пароль?
              </a>
            </div>
            <button className={styles.submit}>Войти</button>
            <div className={styles.footer}>
              <div className={styles.support}>
                Техподдержка:{' '}
                <a className={styles.link} href='mailto:egip@mos.ru'>
                  egip@mos.ru
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default connector(Main)
