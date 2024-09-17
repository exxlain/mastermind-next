import findEmptyElementIndex from './../helpers/findEmptyElementIndex';
import { BoxColor, emptyElement } from '../lib/constants';

describe('findEmptyElementIndex', ()=>{
  test('empty element exists', ()=>{
    const checkedArray =   [BoxColor.BROWN, emptyElement, emptyElement, emptyElement, emptyElement];
    expect(findEmptyElementIndex(checkedArray)).toEqual(1);
  });
  test('none empty elements', ()=>{
    const checkedArray =   [BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN];
    expect(findEmptyElementIndex(checkedArray)).toEqual(-1);
  });
});
