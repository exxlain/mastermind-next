import formatDate from '@/app/helpers/formatDate';
import { advanceTo, clear } from 'jest-date-mock';

beforeAll(() => {
  advanceTo(new Date(2018, 5, 27, 0, 0, 0));
});

afterAll(() => {
  clear();
});

describe('formatDate', ()=>{
  test('only date', ()=>{
    const dateFromDb = '2024-09-22T21:00:00.000Z';
    const resultString = '09/22/2024 21:00';
    const offset = new Date().getTimezoneOffset();
    console.log(offset, 'new Date().getTimezoneOffset()'); //вывел -180
    expect(formatDate(dateFromDb)).toEqual(resultString);
  });
  test('date + time', ()=>{
    const dateFromDb = '2024-09-23T15:00:26.910Z';
    const resultString = '09/23/2024 15:00';
    expect(formatDate(dateFromDb)).toEqual(resultString);
  });

  test('date + time with leading zeros', ()=>{
    const dateFromDb = '2024-09-23T02:01:26.910Z';
    const resultString = '09/23/2024 02:01';
    expect(formatDate(dateFromDb)).toEqual(resultString);
  });


});
