export enum BoxColor {
  BROWN = 'brown',
  BLUE = 'darkBlue',
  GREEN = 'darkGreen',
  GOLD = 'goldenrod',
  WHITE = 'cornSilk',
}
export enum ResultColor {
  BLACK = 'black',
  WHITE = 'cornSilk',
  GREY = 'grey',
}
export const puzzleLength = 5;
export const emptyElement = 'none';

export const puzzleItemsCleared = [emptyElement, emptyElement, emptyElement, emptyElement, emptyElement];
export const puzzleItemsVariants = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.WHITE];

export const colorSymbolMap = {
  [BoxColor.BROWN]: 'W',
  [BoxColor.BLUE]: 'Y',
  [BoxColor.GREEN]: 'J',
  [BoxColor.GOLD]: 'X',
  [BoxColor.WHITE]: 'Q',
};
