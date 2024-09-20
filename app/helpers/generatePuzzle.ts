import { puzzleItemsVariants, puzzleLength } from '@/app/lib/constants';

const getRandomInt = ()=> Math.floor(Math.random() * puzzleLength);

const generatePuzzle = (): Array<string>=>{
  return puzzleItemsVariants.map(()=> puzzleItemsVariants[getRandomInt()]);
};

export default generatePuzzle;
