module.exports = (paletteArtboard) => {
  const colorPalette = paletteArtboard?.children?.find(
    (group) => group.name === 'Color Palette',
  );

  return colorPalette?.children?.reduce(
    (accumulatingPalette, paletteGroup) => ({
      ...accumulatingPalette,
      ...paletteGroup?.children?.reduce(
        (accumulatingVariants, variantGroup) => {
          if (variantGroup.children) {
            const layer = variantGroup.children.find((l) =>
              l.name.match(/swatch/i),
            );
            if (layer) {
              const getRgbValue = (rgbLetterCode) =>
                layer.fills[0].color[rgbLetterCode] * 255;

              return {
                ...accumulatingVariants,
                [`${paletteGroup.name}.${variantGroup.name}`]: {
                  value: `rgba(${getRgbValue('r')}, ${getRgbValue(
                    'g',
                  )}, ${getRgbValue('b')}, ${layer.fills[0].color.a})`,
                  type: 'color',
                },
              };
            }
          }
          return accumulatingVariants;
        },
        {},
      ),
    }),
    {},
  );
};
