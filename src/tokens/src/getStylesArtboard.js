const fetch = require('node-fetch');
const getColorPalette = require('./getColorPalette');
const getSpacers = require('./getSpacers');
const getTypography = require('./getTypography');

module.exports = async function getStylesArtboard(figmaApiKey, figmaId) {
  const result = await fetch('https://api.figma.com/v1/files/' + figmaId, {
    method: 'GET',
    headers: { 'X-Figma-Token': figmaApiKey },
  });

  if (result.status !== 200) {
    console.error(
      `${result.status} Error: Unable to fetch data from the Figma API. You might need to setup your .env file.`,
    );
    return null;
  }

  const figmaTreeStructure = await result.json();
  const stylesArtboard = figmaTreeStructure.document.children;
  const paletteArtboard = stylesArtboard.find(
    (page) => page.name === '02. Colors',
  );
  const typographyArtboard = stylesArtboard.find(
    (page) => page.name === '03. Typography',
  );
  const spacersArtboard = stylesArtboard.find(
    (page) => page.name === '04. Spacers',
  );

  return {
    color: getColorPalette(paletteArtboard),
    typography: getTypography(typographyArtboard),
    spacer: {
      size: getSpacers(spacersArtboard),
    },
  };
};
