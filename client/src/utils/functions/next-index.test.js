import { nextIndex } from './next-index';

describe('my function or component', () => {
  test('normal left shift', () => {
    expect(nextIndex(2, 'left', 4)).toBe(1);
  });

  test('right limit', () => {
    expect(nextIndex(4, 'right', 4)).toBe(4);
  });

  test('left limit', () => {
    expect(nextIndex(0, 'left', 4)).toBe(0);
  });
});
