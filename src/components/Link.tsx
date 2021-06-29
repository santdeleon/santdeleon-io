import styled from 'styled-components';

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  margin?: string;
}

export const Link = styled.a<LinkProps>`
  margin: ${({ margin }) => margin};
`;

export default Link;
