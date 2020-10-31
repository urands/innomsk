import React from 'react'

import styles from './adminPanel.module.scss'

import graph from '../../images/graph.png'
import circleGraph from '../../images/circleGraph.png'

const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Доска аналитики</h2>
      <div className={styles.analitics}>
        <img className={styles.analiticsImage} src={graph} alt=''></img>
        <img className={styles.analiticsImage} src={circleGraph} alt=''></img>
        <div className={styles.analiticsBlock}>
          <p className={styles.quantity}>348 368</p>
          <p className={styles.completeTask}>Дорог отремонтировано</p>
        </div>
        <div className={styles.analiticsBlock}>
          <p className={styles.quantity}>475</p>
          <p className={styles.completeTask}>Дорог осталось отремонтировать</p>
        </div>
        <div className={styles.analiticsBlock}>
          <p className={styles.quantity}>14 868 901</p>
          <p className={styles.completeTask}>Рублей потрачено</p>
        </div>
        <div className={styles.analiticsBlock}>
          <p className={styles.quantity}>4,7/5</p>
          <p className={styles.completeTask}>Качество выполненных работ</p>
        </div>
        <div className={styles.analiticsBlock}>
          <h3 className={styles.dataHeader}>Последние сформированные отчеты</h3>
          <ul className={styles.dataList}>
            <li className={styles.dataItem}>
              Отчет за месяц по СВАО<time className={styles.dataTime}>22.10.20</time>
            </li>
            <li className={styles.dataItem}>
              Отчет о выполнении работ за год<time className={styles.dataTime}>18.09.20</time>
            </li>
            <li className={styles.dataItem}>
              Отчет о выполнении работ за год<time className={styles.dataTime}>18.09.20</time>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
