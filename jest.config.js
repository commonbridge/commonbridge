module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "integrations/**/*.{ts,js,jsx}",
    "packages/**/*.{ts,js,jsx}",
    "plugins/**/*.{ts,js,jsx}"
  ],
  coveragePathIgnorePatterns: [
    "jest.config.js",
    "/node_modules/",
    "/dist/",
  ],
  moduleNameMapper: {
    '^@commonbridge/integration-(.*)$': '<rootDir>/integrations/$1/',
    '^@commonbridge/plugin-(.*)$': '<rootDir>/plugins/$1/',
    '^@commonbridge/(.*)$': '<rootDir>/packages/$1/',
  }
}
