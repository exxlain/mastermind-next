import React from 'react';
import styles from './Fireworks.module.css';

const Fireworks: React.FC = ()=>{
  return (
    <div className={styles.pyro}>
      <div className={styles.before}/>
      <div className={styles.after}/>
    </div>
  );
};


export default Fireworks;
