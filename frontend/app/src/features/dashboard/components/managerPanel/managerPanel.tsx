import React from 'react'
import classnames from 'classnames'
import styles from './managerPanel.module.scss'

const managerPanel = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} action='select1.php' method='post'>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.header}>Назначенный инспектор</h3>
            <select className={styles.select}>
              <option className={styles.option} disabled>
                Назначить инспектора
              </option>
              <option className={styles.option} selected value='Жмых Наталья Павловна'>
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
          </li>
          <li className={styles.item}>
            <h3 className={styles.header}>Средство передвижения</h3>
            <select className={styles.select}>
              <option className={styles.option} disabled>
                Назначить средство передвижения
              </option>
              <option className={styles.option} selected value='Пешком'>
                Пешком
              </option>
              <option className={styles.option} value='Автомобиль'>
                Автомобиль
              </option>
            </select>
          </li>
          <li className={styles.item}>
            <h3 className={styles.header}>Район</h3>
            <select className={styles.select}>
              <option className={styles.option} disabled>
                Назначить район
              </option>
              <option className={styles.option} value='КМ'>
                КМ
              </option>
              <option className={styles.option} selected value='ВАО'>
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
          </li>
          <li className={styles.item}>
            <h3 className={classnames(styles.header, styles.refresh)}>Задание</h3>
            <ol className={styles.taskList}>
              <li className={styles.task}>Проверить две ямы на улице Бабаевской 3</li>
              <li className={styles.task}>Проверить состояние ям на 2-ой Сокольнической улице</li>
              <li className={styles.task}>Проверить бордюры в Песочном переулке</li>
              <li className={styles.task}>Оценить ремонт ямы в Микульском переулке</li>
            </ol>
          </li>
          <li className={styles.item}>
            <h3 className={styles.header}>Комментарий</h3>
            <textarea className={styles.textArea}>Ямы на Бабаевской были размером 2*3. На бордюре скол слева</textarea>
          </li>
        </ul>
        <button className={styles.submit}>Назначить</button>
      </form>
    </div>
  )
}

export default managerPanel
