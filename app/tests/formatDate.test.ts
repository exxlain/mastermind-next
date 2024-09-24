import formatDate from '@/app/helpers/formatDate';

describe('formatDate', ()=>{
  test('only date', ()=>{
    const dateFromDb = '2024-09-22T21:00:00.000Z';
    const resultString = '09/22/2024 21:00';
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
