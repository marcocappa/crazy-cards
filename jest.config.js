module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: './coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/__tests__/', '/node_modules/'],
  setupFiles: ['./src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/__mocks__/', '/__setup__/'],
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
};
