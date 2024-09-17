import React from 'react';
import styles from './ColorBoxesList.module.css';
import ColorBox from './Boxes/ColorBox';
import ResultBox from './Boxes/ResultBox';

interface IColorBoxesListProps {
  colors: Array<string>;
  results: Array<number>;
}

const ColorBoxesResultList : React.FC<IColorBoxesListProps> = ({ colors, results }) =>{
  return (
    <div className={styles.resultItem}>
      <div className={styles.colorsList}>
        {colors.map(currentColor =>(ColorBox({ color: `${currentColor}` })))}
      </div>
      <div className={styles.resultsList}>
        {results.map(result =>(ResultBox({ result: result })))}
      </div>
    </div>
  );
};

export default ColorBoxesResultList;
