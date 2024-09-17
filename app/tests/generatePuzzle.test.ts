import generatePuzzle from '../helpers/generatePuzzle';

test('returns 5 length array', () => {
  expect(generatePuzzle()).toHaveLength(5);
});

test('should have array of string', () => {
  expect(generatePuzzle()).toEqual(
    expect.arrayContaining([expect.any(String)]),
  );
});
