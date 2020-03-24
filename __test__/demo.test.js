function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(0.1, 0.2)).toBe(0.3);
});