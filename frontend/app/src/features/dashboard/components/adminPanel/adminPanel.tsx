import React from 'react'

import styles from './adminPanel.module.scss'

import graph from '../../images/graph.png'
import circleGraph from '../../images/circleGraph.png'

const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Доска аналитики</h2>
        <div className={styles.analitics}>
          <div className={styles.analiticsImgBlock}>
            <img className={styles.analiticsImage} src={graph} alt=''></img>
            <img className={styles.analiticsImage} src={circleGraph} alt=''></img>
          </div>
          <div className={styles.analiticsLine}>
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
          </div>
          <div className={styles.dataLine}>
            <div className={styles.dataBlock}>
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
            <button className={styles.report}>Сформировать общий отчет</button>
            <select className={styles.select}>
              <option className={styles.option} selected disabled>
                Сформировать отчет по АО
              </option>
              <option className={styles.option} value='КМ'>
                КМ
              </option>
              <option className={styles.option} value='ВАО'>
                ВАО
              </option>
              <option className={styles.option} value='ЦАО'>
                ЦАО
              </option>
              <option className={styles.option} value='САО'>
                САО
              </option>
              <option className={styles.option} value='СВАО'>
                СВАО
              </option>
              <option className={styles.option} value='ЮВАО'>
                ЮВАО
              </option>
              <option className={styles.option} value='ЮАО'>
                ЮАО
              </option>
              <option className={styles.option} value='ЮЗАО'>
                ЮЗАО
              </option>
              <option className={styles.option} value='ЗАО'>
                ЗАО
              </option>
              <option className={styles.option} value='СЗАО'>
                СЗАО
              </option>
              <option className={styles.option} value='ЗелАО'>
                ЗелАО
              </option>
              <option className={styles.option} value='Троицкий'>
                Троицкий
              </option>
              <option className={styles.option} value='Новомосковский'>
                Новомосковский
              </option>
              <option className={styles.option} value='Внуково'>
                Внуково
              </option>
              <option className={styles.option} value='ВМ'>
                ВМ
              </option>
            </select>
            <select className={styles.select}>
              <option className={styles.option} selected disabled>
                Сформировать отчет по сотруднику
              </option>
              <option className={styles.option} value='Жмых Наталья Павловна'>
                Жмых Наталья Павловна
              </option>
              <option className={styles.option} value='Крокодил Гена'>
                Крокодил Гена
              </option>
              <option className={styles.option} value='Шапокляк'>
                Шапокляк
              </option>
              <option className={styles.option} value='Крыса Лариса'>
                Крыса Лариса
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
