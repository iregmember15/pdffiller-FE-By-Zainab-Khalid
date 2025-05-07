// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom", // Use 'jsdom' for browser-like environment
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   transform: {
//     "^.+\\.(ts|tsx)$": ["ts-jest", { isolatedModules: true }],
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   moduleNameMapper: {
//     "\\.(css|scss|sass|less)$": "<rootDir>/__mocks__/fileMock.js", // Mock style imports
//     "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image imports
//     '\\.pdf$': '<rootDir>/__mocks__/fileMock.js',
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   setupFiles: ["<rootDir>/jest.setup.ts"],
// };

// export default config;
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest", 
      {
        isolatedModules: true,
        // Add these ts-jest specific options
        tsconfig: "tsconfig.json",
        useESM: true,
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta', 
              options: { metaObjectReplacement: { env: { VITE_APP_BASE_URL: 'http://localhost:3000' } } }
            }
          ]
        }
      }
    ],
    // Add transform for JavaScript files if needed
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    // Update this to exclude ESM modules that need to be transformed
    "node_modules/(?!(pdfjs-dist|react-quill|other-esm-modules)/"
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Better CSS mocking
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    '\\.pdf$': '<rootDir>/__mocks__/fileMock.js',
    // Add this to handle ESM imports
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // You typically don't need both setupFiles and setupFilesAfterEnv
  // setupFiles: ["<rootDir>/jest.setup.ts"],
};

export default config;