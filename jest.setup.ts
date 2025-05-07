import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder globally for Jest environment
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;
