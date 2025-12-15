import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('firebase/app', () => ({ initializeApp: vi.fn() }));
vi.mock('firebase/database', () => ({
  getDatabase: vi.fn(),
  ref: vi.fn(),
  push: vi.fn(),
  onValue: vi.fn(),
}));

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}