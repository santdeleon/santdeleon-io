import React from 'react';
import styled from 'styled-components';

// =============================================================================
// Typedefs
// =============================================================================

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

// =============================================================================
// Styled Components
// =============================================================================

const ButtonBase = styled.button<ButtonProps>`
  display: inline-block;
  cursor: pointer;
  border: 0;
`;

// =============================================================================
// Styled Components
// =============================================================================

export const Button = ({ title, margin, padding, type = 'button', className, onClick, children }: ButtonProps) => (
  <ButtonBase title={title} type={type} margin={margin} className={className} onClick={onClick}>
    {children}
  </ButtonBase>
);
