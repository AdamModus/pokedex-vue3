module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',

  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|js)'],

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx,vue}',
    // do not cover types declarations
    '!src/**/*.d.ts',
    // do not cover main.ts because it is not testable
    '!src/main.ts',
  ],
};
