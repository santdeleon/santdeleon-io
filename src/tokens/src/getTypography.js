module.exports = (typographyArtboard) => {
  const sizeLayer = typographyArtboard?.children?.find(
    (l) => l.name === 'Size',
  );
  const weightLayer = typographyArtboard?.children?.find(
    (l) => l.name === 'Weight',
  );
  const familyLayer = typographyArtboard?.children?.find(
    (l) => l.name === 'Family',
  );

  const size = sizeLayer?.children?.reduce(
    (accumulatingGroup, currentGroup) => {
      let sizeInRem = '';

      if (currentGroup.style.fontSize === 13) sizeInRem = 0.8125;
      if (currentGroup.style.fontSize === 16) sizeInRem = 1;
      if (currentGroup.style.fontSize === 18) sizeInRem = 1.125;
      if (currentGroup.style.fontSize === 20) sizeInRem = 1.25;
      if (currentGroup.style.fontSize === 21) sizeInRem = 1.3125;
      if (currentGroup.style.fontSize === 24) sizeInRem = 1.5;
      if (currentGroup.style.fontSize === 32) sizeInRem = 2;
      if (currentGroup.style.fontSize === 43) sizeInRem = 2.6875;
      if (currentGroup.style.fontSize === 57) sizeInRem = 3.5625;
      if (currentGroup.style.fontSize === 76) sizeInRem = 4.75;
      if (currentGroup.style.fontSize === 101) sizeInRem = 6.3125;
      if (currentGroup.style.fontSize === 135) sizeInRem = 8.4375;

      return {
        ...accumulatingGroup,
        [`${currentGroup.name}`]: {
          px: {
            value: `${currentGroup.style.fontSize}px`,
            type: 'typography',
          },
          rem: {
            value: `${sizeInRem}rem`,
            type: 'typography',
          },
          lineHeight: {
            value: `${currentGroup.style.lineHeightPercentFontSize}%`,
            type: 'typography',
          },
        },
      };
    },
    {},
  );

  const weight = weightLayer?.children?.reduce(
    (accumulatingGroup, currentGroup) => {
      return {
        ...accumulatingGroup,
        [`${currentGroup.name}`]: {
          value: currentGroup.style.fontWeight,
          type: 'typography',
        },
      };
    },
    {},
  );

  const family = familyLayer?.children?.reduce(
    (accumulatingGroup, currentGroup) => {
      return {
        ...accumulatingGroup,
        [`${currentGroup.name}`]: {
          value: currentGroup.style.fontFamily,
          type: 'typography',
        },
      };
    },
    {},
  );

  return {
    size,
    weight,
    family,
  };
};
