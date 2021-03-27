module.exports = async function getFigmaObjTree(figmaApiKey, figmaId) {
  let result = await fetch('https://api.figma.com/v1/files' + figmaId, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey,
    },
  });

  return result.json();
};
