import { puzzleItemsVariants, puzzleLength } from '@/app/lib/constants';

const getRandomInt = ()=> Math.floor(Math.random() * puzzleLength);

const generatePuzzle = ()=>{
  return puzzleItemsVariants.map(()=> puzzleItemsVariants[getRandomInt()]);
};

export default generatePuzzle;
