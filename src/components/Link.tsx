import React from 'react';
import styled from 'styled-components';

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href?: string;
  margin?: string;
  title?: string;
  children: React.ReactNode[] | React.ReactNode;
}

export const StyledLink = styled.a<LinkProps>`
  margin: ${({ margin }) => margin};
  color: gray;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#666666')};
  }
`;

export const Link: React.FC<LinkProps> = ({
  href,
  title,
  margin,
  children,
}: LinkProps) => (
  <StyledLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    margin={margin}
  >
    {children}
  </StyledLink>
);

export default Link;
