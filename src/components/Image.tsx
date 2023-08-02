import React from 'react';

export interface ImageProps extends React.HTMLProps<HTMLImageElement> {}

export const Image = React.memo(({ src, alt, title, width, height, onLoad, onError, hidden }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={onError}
      hidden={hidden}
    />
  );
});
