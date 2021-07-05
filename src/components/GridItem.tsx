import styled from 'styled-components';

interface GridItemProps {
  align?: string;
  justify?: string;
  column?: string;
  row?: string;
  margin?: string;
}

export const GridItem = styled.div<GridItemProps>`
  align-self: ${({ align }) => align};
  justify-self: ${({ justify }) => justify};
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
  margin: ${({ margin }) => margin};
`;

export default GridItem;
