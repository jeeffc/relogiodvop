const { getFormattedTime } = require('../src/clock');

test('getFormattedTime should return a string in HH:MM:SS format', () => {
  const time = getFormattedTime();
  expect(time).toMatch(/^\d{2}:\d{2}:\d{2}$/);
});
