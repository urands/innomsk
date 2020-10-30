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
            <div className={styles.panel}>
              <div className={styles.block}>
                <h3 className={styles.header}>Задание</h3>
                <ol className={styles.list}>
                  <li className={styles.task}>Проверить две ямы на Бабаевской 3</li>
                  <li className={styles.task}>Проверить состояние ям на 2-ой Сокольнической улице</li>
                  <li className={styles.task}>Проверить бордюры в Песочном переулке</li>
                  <li className={styles.task}>Оценить ремонт ямы в Микульском переулке</li>
                </ol>
              </div>
              <div className={styles.block}>
                <h3 className={styles.header}>Прогресс</h3>
                <div className={styles.progress}>
                  <p className={styles.progressText}>24%</p>
                </div>
                <div className={styles.commentBlock}>
                  <h4 className={styles.commentHeader}>Комментарий</h4>
                  <p className={styles.commentText}>Осталось заделать еще три ямы</p>
                </div>
              </div>
              <div className={styles.block}>
                <h3 className={styles.header}>Отчет</h3>
                <ul className={styles.stars}>
                  <li className={styles.star}></li>
                  <li className={styles.star}></li>
                  <li className={styles.star}></li>
                  <li className={styles.star}></li>
                  <li className={styles.star}></li>
                </ul>
                <button className={styles.addFile}>Добавить файл</button>
                <button className={styles.submit}>Отправить</button>
              </div>
            </div>
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
