import React from 'react';
import styles from './WelcomeAnimation.module.css';
import {numberOfAnimationElements} from 'app/lib/constants'

const WelcomeAnimation: React.FC =()=> {

  const createBox = (listLength: number) => {
    const templateArr = Array.from({length: listLength})
    return (
      templateArr.map((el, index) =>
        (<div className={styles.sword} style={{animationDelay: `${index*360}ms`}} key={index}>
          <div className={styles.blade}/>
          <div className={styles.guard}/>
          <div className={styles.handle}/>
          <div className={styles.pommel}/>
        </div>)))
  }

  return (
    <div className={styles.container}>
      {createBox(numberOfAnimationElements)}
    </div>
  )

}

export default WelcomeAnimation
