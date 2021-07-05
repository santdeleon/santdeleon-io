import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  margin?: string;
  padding?: string;
  border?: string;
  fontSize?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode[] | React.ReactNode;
}

const ButtonBase = styled.button<ButtonProps>`
  cursor: pointer;
  display: block;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border: 0;
`;

const Button: React.FC<ButtonProps> = ({
  margin,
  padding,
  fontSize,
  className,
  onClick,
  children,
}: ButtonProps) => (
  <ButtonBase
    margin={margin}
    padding={padding}
    fontSize={fontSize}
    className={className}
    onClick={onClick}
  >
    {children}
  </ButtonBase>
);

export const ButtonTransparent = styled(Button)`
  background: transparent;
`;
