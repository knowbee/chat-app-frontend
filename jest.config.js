module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.(js|jsx)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
  },
  coveragePathIgnorePatterns: [
    "coverage",
    "node_modules",
    "src/index.js",
    "src/helpers/axiosHelper.js",
  ],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  setupFiles: ["./config/enzymeConfig.js"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
