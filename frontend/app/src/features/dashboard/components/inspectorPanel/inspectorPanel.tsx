import React from 'react'

import styles from './inspectorPanel.module.scss'

const inspectorPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.block}>
        <h3 className={styles.header}>Задание</h3>
        <p className={styles.task}>Проверить четыре ямы на Бабаевской 3</p>
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
      <div className={styles.buttonBlock}>
        <button className={styles.prev}>Предыдущее</button>
        <button className={styles.next}>Следующее</button>
      </div>
    </div>
  )
}

export default inspectorPanel
