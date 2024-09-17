import React from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import styles from './ColorBox.module.css';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { colorSymbolMap } from '@/app/lib/constants';

interface IColorBoxButtonProps {
  color: string;
  selectColor: (color: string) => AnyAction;
}

const ColorBoxButton : React.FC<IColorBoxButtonProps> = ({ color, selectColor }) =>{
  const dispatch = useAppDispatch();

  return (
     <button
       className={styles.box}
       onClick={() => (dispatch(selectColor(color)))}
       style={{ backgroundColor: `${color}` }}
       key={nanoid()}
     >
       {colorSymbolMap[color as keyof typeof colorSymbolMap]}
     </button>
  );
};

export default ColorBoxButton;