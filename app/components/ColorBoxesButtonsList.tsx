import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBoxButton from './Boxes/ColorBoxButton';
import { AnyAction } from '@reduxjs/toolkit';

interface IColorBoxesButtonsListProps {
  colors: Array<string>;
  selectColor: (color: string) => AnyAction;
  isVictory: boolean;
}

const ColorBoxesButtonsList : React.FC<IColorBoxesButtonsListProps> = ({ colors, selectColor, isVictory }) =>{
  return (
    <div className={styles.colorsList}>
      {colors.map(currentColor =>
        (ColorBoxButton(
          { color: `${currentColor}`,  selectColor: selectColor, isVictory },
        )))}
    </div>
  );
};

export default ColorBoxesButtonsList;
