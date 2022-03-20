const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir/>'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ["<rootDir>/cypress/"]
};

module.exports = createJestConfig(customJestConfig);