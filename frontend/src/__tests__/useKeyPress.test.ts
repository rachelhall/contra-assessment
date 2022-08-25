import { renderHook } from '@testing-library/react';
import { useKeyPress } from '../utils';

describe('useKeyPress', () => {
  const keyDownEvent = new KeyboardEvent('keydown', { keyCode: 27 });
  document.dispatchEvent(keyDownEvent);

  const { result } = renderHook(() => useKeyPress('ESC'));

  it('Checks to see if a specific key is being pressed', () => {
    expect(result.current).toBe(true);
  });
});
