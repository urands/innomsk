import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import StarRatings from 'react-star-ratings'

import styles from './inspectorPanel.module.scss'

const inspectorPanel = () => {
  const percentage = 24

  return (
    <div className={styles.panel}>
      <div className={styles.block}>
        <h3 className={styles.header}>Задание</h3>
        <p className={styles.task}>Проверить четыре ямы на Бабаевской 3</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.header}>Прогресс</h3>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(217, 0, 0, 1)`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#444',
              // Text size
              fontSize: '24px',
              textAnchor: 'middle',
              dominantBaseline: 'central',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          }}
          className={styles.progress}
        />
        <div className={styles.commentBlock}>
          <h4 className={styles.commentHeader}>Комментарий</h4>
          <p className={styles.commentText}>Осталось заделать еще три ямы</p>
        </div>
      </div>
      <form className={styles.block} action='#'>
        <h3 className={styles.header}>Отчет</h3>
        <StarRatings
          rating={3}
          starRatedColor='#F2AE00'
          starHoverColor='#d90000'
          changeRating={() => {
            console.log('star')
          }}
          numberOfStars={5}
          name='rating'
          starDimension='20px'
        />
        <div className={styles.uploadWrapper}>
          <label className={styles.label}>
            <span>Добавить файл</span>
            <input type='file' />
          </label>
        </div>
        <button
          className={styles.submit}
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          Отправить
        </button>
      </form>
      <div className={styles.buttonBlock}>
        <button className={styles.prev}>Предыдущее</button>
        <button className={styles.next}>Следующее</button>
      </div>
    </div>
  )
}

export default inspectorPanel
