import React, { FC } from 'react';
import styled from 'styled-components';

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  color?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const StyledText = styled.p<TextProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
`;

StyledText.defaultProps = {
  color: '#333232',
  fontSize: '1rem',
  fontWeight: '400',
};

export const Text: FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  margin,
  className,
  children,
}) => (
  <StyledText
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    margin={margin}
    className={className}
  >
    {children}
  </StyledText>
);

export default Text;
