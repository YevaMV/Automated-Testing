const { generateText } = require('./util'); //node.js

test('should output name and age', () => {
  const text = generateText('Max', 30);
  expect(text).toBe('Max (30 years old)');
});
