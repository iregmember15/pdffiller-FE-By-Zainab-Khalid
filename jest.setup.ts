// import { TextEncoder, TextDecoder } from 'util';

// // Polyfill TextEncoder and TextDecoder globally for Jest environment
// globalThis.TextEncoder = TextEncoder;
// globalThis.TextDecoder = TextDecoder;

import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Polyfill TextEncoder and TextDecoder globally for Jest environment
global.TextEncoder = TextEncoder;
// @ts-expect-error - Node's TextDecoder is slightly different from the browser's
global.TextDecoder = TextDecoder;

// Configure test-id attribute if you're using something other than data-testid
configure({ testIdAttribute: 'data-testid' });

// Mock window.matchMedia which is not implemented in JSDOM
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() { return false; },
  };
};

// Mock ResizeObserver which is not available in JSDOM
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock PDF.js worker which uses import.meta
jest.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {
    workerSrc: 'mock-worker.js',
  },
  getDocument: jest.fn().mockResolvedValue({
    promise: Promise.resolve({
      numPages: 1,
      getPage: jest.fn().mockResolvedValue({
        getViewport: jest.fn().mockReturnValue({ width: 100, height: 100 }),
      }),
    }),
  }),
}));

// Silence findDOMNode warnings
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  findDOMNode: jest.fn(),
}));

// Mock environment variables that would normally come from import.meta.env
process.env.VITE_APP_BASE_URL = 'http://localhost:3000';

// Mock any other global APIs your tests might need
global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

// Add any custom matchers or utilities here
expect.extend({
  toBeCheckedOrUndefined(received) {
    const pass = received === undefined || received === false;
    return {
      message: () => `expected checkbox to be unchecked or undefined`,
      pass,
    };
  },
});