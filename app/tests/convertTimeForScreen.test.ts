import convertTimeForScreen from '../helpers/convertTimeForScreen';

describe('convertTimeForScreen', ()=>{
  test('only seconds with zero', ()=>{
    const seconds = 1;
    const result ='00:01';
    expect(convertTimeForScreen(seconds)).toEqual(result);
  });
  test('only seconds', ()=>{
    const seconds = 40;
    const result ='00:40';
    expect(convertTimeForScreen(seconds)).toEqual(result);
  });
  test('minutes +  seconds', ()=>{
    const seconds = 140;
    const result ='02:20';
    expect(convertTimeForScreen(seconds)).toEqual(result);
  });
  test('minutes +  seconds with leading zero', ()=>{
    const seconds = 122;
    const result ='02:02';
    expect(convertTimeForScreen(seconds)).toEqual(result);
  });
  test('hours + minutes with leading zero +  seconds', ()=>{
    const seconds = 4010;
    const result ='01:06:50';
    expect(convertTimeForScreen(seconds)).toEqual(result);
  });
});
