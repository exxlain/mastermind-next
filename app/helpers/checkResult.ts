const checkResult = (puzzleSequence: Array<string>, currentSequence: Array<string>): Array<string> =>{
  const resultArr: Array<number> =  [];
  const newPuzzle: Map<string, number> =  new Map();
  const newCurrent: Map<string, number> =  new Map();

  currentSequence.forEach((currentEl, index)=>{
    if (currentEl === puzzleSequence[index]) {
      resultArr.push(2);
    } else {
      const currentQuantityPuzzle: number = newPuzzle.get(puzzleSequence[index]) || 0;
      newPuzzle.set(puzzleSequence[index], 1 + currentQuantityPuzzle);
      const currentQuantity: number = newCurrent.get(currentEl) || 0;
      newCurrent.set(currentEl, currentQuantity + 1);
    }
  });


  for (const key of newPuzzle.keys()) {
    const puzzleValue = newPuzzle.get(key);
    if (puzzleValue !== undefined) {
      const currentValue = newCurrent.get(key);
      if (currentValue !== undefined) {
        if (currentValue < puzzleValue) {
          for (let i = 0; i < currentValue; i++) {
            resultArr.push(1);
          }
          for (let i = 0; i < puzzleValue - currentValue; i++) {
            resultArr.push(0);
          }
        } else if (currentValue > puzzleValue) {
          for (let i = 0; i < puzzleValue; i++) {
            resultArr.push(1);
          }
        } else if (currentValue === puzzleValue) {
          for (let i = 0; i < puzzleValue; i++) {
            resultArr.push(1);
          }
        }
      } else {
        for (let i = 0; i < puzzleValue; i++) {
          resultArr.push(0);
        }
      }
    }
  }


  return  resultArr.sort((a, b) => b - a);
};

export default checkResult;
