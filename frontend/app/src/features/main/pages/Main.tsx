import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { connector, PropsFromRedux } from './container'

import styles from './Main.module.scss'
import { Loader } from 'components/UI'

const Main = (props: PropsFromRedux) => {
  const { loading, authentication, role } = props
  const history = useHistory()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (role) {
      history.push('/dashboard')
    }
  }, [role, history])

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.inner}>
          <form className={styles.auth}>
            <div className={styles.logo}></div>
            <h2 className={styles.header}>ЕДИНОЕ ГЕОИНФОРМАЦИОННОЕ ПРОСТРАНСТВО ГОРОДА МОСКВЫ</h2>
            <div className={styles.input}>
              <input
                className={styles.login}
                type='text'
                placeholder='Email или Логин'
                onChange={(e) => {
                  setLogin(e.target.value)
                }}
                value={login}
              />
              <input
                className={styles.password}
                type='password'
                placeholder='Введите пароль...'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                value={password}
              />
              <a className={styles.foggoten} href='##'>
                Забыли пароль?
              </a>
            </div>
            <button
              className={styles.submit}
              onClick={(e) => {
                e.preventDefault()
                authentication(login, password)
              }}
            >
              Войти
            </button>
            <div className={styles.footer}>
              <div className={styles.support}>
                Техподдержка:
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
