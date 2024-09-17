import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ResultBox.module.css';
import getColorForResultBox from '@/app/helpers/getColorForResultBox';

interface IResultBoxProps {
  result: number;
}

const ResultBox : React.FC<IResultBoxProps> = ({ result }) =>{
  return (
     <div
       className={styles.box}
       key={nanoid()}
       style={{ backgroundColor: `${getColorForResultBox(result)}` }}
     />
  );
};

export default ResultBox;
