import ColorInd from '../app.js';

// 1 вариант теста:
test('ColorInd 51 - healthy', () => {
  const result = ColorInd({ name: 'Маг', health: 51 });
  expect(result).toBe('healthy');
});
test('ColorInd 50 - wounded', () => {
  const result = ColorInd({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});
test('ColorInd 15 - wounded', () => {
  const result = ColorInd({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});
test('ColorInd 14 - critical', () => {
  const result = ColorInd({ name: 'Маг', health: 14 });
  expect(result).toBe('critical');
});

// 2 вариант теста:
test.each([
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
])('should calculate cashback for %s level with %i amount', (character, expected) => {
  const result = ColorInd(character);

  expect(result).toBe(expected);
});
