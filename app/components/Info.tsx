import React from 'react';
import styles from './Info.module.css';
import ResultBox from './Boxes/ResultBox';

const Info: React.FC = ()=>{
  return (
            <ul className={styles.infoSection}>
                <li className={styles.infoCase}>
                    <ResultBox result={2}/>
                    <p>place and color</p>
                </li>
                <li className={styles.infoCase}>
                    <ResultBox result={1}/>
                    <p>only color</p>
                </li>
                <li className={styles.infoCase}>
                    <ResultBox result={0}/>
                    <p>nothing</p>
                </li>
            </ul>
  );
};

export default Info;
