import checkResult from '../helpers/checkResult';
import { BoxColor } from '../lib/constants';

describe('checkResult', ()=>{
  test('only fails', ()=>{
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    const currentSequence = [ BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([0, 0, 0, 0, 0]);
  });

  test('1 full match in first place', ()=>{
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    const currentSequence = [ BoxColor.BROWN, BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('1 full match in second place', ()=>{
    const puzzleSequence = [BoxColor.BLUE, BoxColor.BROWN, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    const currentSequence = [ BoxColor.WHITE, BoxColor.BROWN, BoxColor.WHITE, BoxColor.WHITE, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 0, 0, 0, 0]);
  });

  test('2 full', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 0, 0, 0]);
  });

  test('3 full', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 0, 0]);
  });

  test('4 full', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 0]);
  });

  test('5 full', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 2, 2]);
  });

  test('1 full + 1 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 0, 0, 0]);
  });

  test('1 full + 2 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GREEN, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 0, 0]);
  });

  test('1 full + 3 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GREEN, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GOLD];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.GREEN];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 0]);
  });

  test('1 full + 4 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GREEN, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GOLD];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 1, 1, 1, 1]);
  });

  test('2 full  + 1 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 0, 0]);
  });
  test('2 full  + 2 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.WHITE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 0]);
  });

  test('2 full  + 3 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.BLUE, BoxColor.GOLD, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 1, 1, 1]);
  });

  test('3 full  + 1 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.GOLD, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 0]);
  });

  test('3 full  + 2 color match', ()=>{
    const currentSequence = [ BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.GOLD, BoxColor.BLUE, BoxColor.BLUE, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([2, 2, 2, 1, 1]);
  });

  test('1 color match', ()=>{
    const currentSequence = [ BoxColor.WHITE, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.WHITE];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 0, 0, 0, 0]);
  });

  test('2 color match', ()=>{
    const currentSequence = [ BoxColor.WHITE, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GREEN];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 0, 0, 0]);
  });

  test('3 color match', ()=>{
    const currentSequence = [ BoxColor.BLUE, BoxColor.WHITE, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GREEN];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 0, 0]);
  });

  test('4 color match', ()=>{
    const currentSequence = [ BoxColor.BLUE, BoxColor.BROWN, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GREEN];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.BLUE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 0]);
  });

  test('5 color match', ()=>{
    const currentSequence = [ BoxColor.BLUE, BoxColor.BROWN, BoxColor.BLUE, BoxColor.WHITE, BoxColor.GREEN];
    const puzzleSequence = [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.BLUE, BoxColor.WHITE];
    expect(checkResult(puzzleSequence, currentSequence)).toEqual([1, 1, 1, 1, 1]);
  });

});
