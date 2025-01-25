import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBoxButton from './Boxes/ColorBoxButton';
import { AnyAction } from '@reduxjs/toolkit';

interface IColorBoxesButtonsListProps {
  colors: Array<string>;
  selectColor: (color: string) => AnyAction;
  disabled: boolean;
}

const ColorBoxesButtonsList : React.FC<IColorBoxesButtonsListProps> = React.memo(({ colors, selectColor, disabled }) =>{
  return (
    <div className={styles.colorsList}>
      {colors.map(currentColor =>
        (ColorBoxButton(
          { color: `${currentColor}`,  selectColor: selectColor, disabled },
        )))}
    </div>
  );
});

ColorBoxesButtonsList.displayName = 'ColorBoxesButtonsList';

export default ColorBoxesButtonsList;
