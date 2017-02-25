const path = require('path');

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: './src/**/*.spec.js',
        watched: false
      },
      {
        pattern: './src/**/*.spec.jsx',
        watched: false
      }
    ],
    preprocessors: {
      // add webpack as preprocessor
      './src/**/*.js': ['webpack', 'sourcemap'],
      './src/**/*.jsx': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: false // please don't spam the console when running in karma!
    },
    plugins: [
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-webpack',
      'babel-polyfill'
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'react', 'stage-2']
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
  });
};