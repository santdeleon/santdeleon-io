import styled from 'styled-components';

interface ColProps {
  align?: string;
  justify?: string;
  margin?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align ?? 'flex-start'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  margin: ${({ margin }) => margin};
`;

export default Col;
