module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // ha Webpack aliasként használod az @-ot
        '\\.(css|scss)$': 'identity-obj-proxy' // scss fájlok kezelése Jestnek nincs hozzá loadere, ezért mockoljuk
    },
    transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
    testMatch: ['**/tests/**/*.spec.[jt]s'],
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
