const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  modulePathIgnorePatterns: [
    '/_book/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  unmockedModulePathPatterns: [
    "node_modules/react/",
    "node_modules/enzyme/"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/cssMock.js"
  },
  collectCoverageFrom: [
    'components/**/*.{js, jsx}'
  ],
  transformIgnorePatterns
};
