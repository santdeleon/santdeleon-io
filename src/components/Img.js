import styled from 'styled-components';

const Img = styled.img`
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  width: ${({ width, fluid }) => {
    if (fluid) return '100%';
    if (width) return width;
  }};
  height: ${({ height, fluid }) => {
    if (fluid) return 'auto';
    if (height) return height;
  }};
  margin: ${({ margin }) => margin && margin};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
`;

export default Img;
