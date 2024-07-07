// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],  
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}'], 
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transformIgnorePatterns: ['/node_modules/(?!@testing-library/react)'],  
  };
  