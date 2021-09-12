import React from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: ButtonType;
  margin?: string;
  padding?: string;
  border?: string;
  fontSize?: string;
  bgColor?: string;
}

const ButtonBase = styled.button<ButtonProps>`
  display: block;
  cursor: pointer;
  border: 0;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgColor }) => bgColor};
`;

export const Button: React.FC<ButtonProps> = ({
  margin,
  padding,
  fontSize,
  bgColor,
  type = 'button',
  className,
  onClick,
  children,
}) => (
  <ButtonBase
    type={type}
    margin={margin}
    padding={padding}
    fontSize={fontSize}
    bgColor={bgColor}
    className={className}
    onClick={onClick}
  >
    {children}
  </ButtonBase>
);
