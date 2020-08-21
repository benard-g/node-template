module.exports = {
  // Test options
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFiles: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['node_modules/', 'build/'],
  clearMocks: true,
  // Coverage
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
};
