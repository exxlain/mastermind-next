import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ColorBox.module.css';
import { colorSymbolMap } from '@/app/lib/constants';


interface IColorBoxProps {
  color: string;
}

const ColorBox : React.FC<IColorBoxProps> = ({ color }) =>{
  return (
    <div
      className={styles.box}
      style={{ backgroundColor: `${color}` }}
      key={nanoid()}
    >
      <div className={styles.text}>{colorSymbolMap[color as keyof typeof colorSymbolMap]}</div>
    </div>
  );
};

export default ColorBox;
