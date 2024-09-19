import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBoxSelected from './Boxes/ColorBoxSelected';
import { AnyAction } from '@reduxjs/toolkit';

interface IColorBoxesSelectedListProps {
  colors: Array<string>;
  clearSelectedPlace: (color: number) => AnyAction;
}

const ColorBoxesSelectedList : React.FC<IColorBoxesSelectedListProps> = ({ colors, clearSelectedPlace }) =>{
  return (
    <div className={styles.colorsList}>
      {colors?.map((currentColor, index) =>
        (ColorBoxSelected(
          { color: `${currentColor}`,  clearSelectedPlace: clearSelectedPlace, index:  index },
        )))}
    </div>
  );
};

export default ColorBoxesSelectedList;
