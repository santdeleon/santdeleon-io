import styled from 'styled-components';

interface RowProps {
  width?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

export const Row = styled.div<RowProps>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  margin: ${({ margin }) => margin};
`;

export default Row;
