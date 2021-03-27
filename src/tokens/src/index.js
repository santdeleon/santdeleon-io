const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const getStylesArtboard = require('./getStylesArtboard');

const tokens = (async () => {
  const { FIGMA_API_KEY, FIGMA_ID } = process.env;
  const tokens = await getStylesArtboard(FIGMA_API_KEY, FIGMA_ID);

  // create the directory to house our Figma json
  fs.mkdir(
    path.resolve(__dirname, './properties'),
    { recursive: true },
    (err) => {
      if (err) throw err;
    },
  );

  // write to the directory
  fs.writeFileSync(
    path.resolve(__dirname, './properties/tokens.json'),
    JSON.stringify(tokens),
  );

  return tokens;
})();

module.exports = tokens;
