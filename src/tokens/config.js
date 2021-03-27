const path = require('path');

const StyleDictionary = require('style-dictionary').extend({
  source: [path.resolve(__dirname, 'src/properties/**/*.json')],
  platforms: {
    web: {
      transformGroup: 'web',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        },
        {
          destination: 'tokens.js',
          format: 'javascript/object',
        },
        {
          destination: 'tokens.json',
          format: 'json',
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
