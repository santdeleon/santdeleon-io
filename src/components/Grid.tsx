import styled from 'styled-components';

interface GridItemProps {
  col?: string;
  colGap?: string;
  rowGap?: string;
  gap?: string;
  autoRows?: string;
  autoColumns?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export const Grid = styled.div<GridItemProps>`
  display: grid;
  grid-template-columns: ${({ col }) => col || '1fr'};
  grid-column-gap: ${({ colGap }) =>
    (colGap === 'sm' && 'var(--spacer-size-400-rem)') ||
    (colGap === 'md' && 'var(--spacer-size-600-rem)') ||
    (colGap === 'lg' && 'var(--spacer-size-800-rem)') ||
    colGap};
  grid-row-gap: ${({ rowGap }) =>
    (rowGap === 'sm' && 'var(--spacer-size-400-rem)') ||
    (rowGap === 'md' && 'var(--spacer-size-600-rem)') ||
    (rowGap === 'lg' && 'var(--spacer-size-800-rem)') ||
    rowGap};
  grid-gap: ${({ gap }) =>
    (gap === 'sm' && 'var(--spacer-size-400-rem)') ||
    (gap === 'md' && 'var(--spacer-size-600-rem)') ||
    (gap === 'lg' && 'var(--spacer-size-800-rem)') ||
    gap};
  grid-auto-columns: ${({ autoColumns }) => autoColumns};
  grid-auto-rows: ${({ autoRows }) => autoRows};
  justify-items: ${({ justify }) => justify || 'start'};
  align-items: ${({ align }) => align || 'stretch'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  ${({ theme, xs }) => theme.media.greaterThan('xs')`
    grid-template-columns: ${`repeat(${xs}, 1fr)`};
  `}
  ${({ theme, sm }) => theme.media.greaterThan('sm')`
    grid-template-columns: ${`repeat(${sm}, 1fr)`};
  `};
  ${({ theme, md }) => theme.media.greaterThan('md')`
    grid-template-columns: ${`repeat(${md}, 1fr)`};
  `}
  ${({ theme, lg }) => theme.media.greaterThan('lg')`
    grid-template-columns: ${`repeat(${lg}, 1fr)`};
  `};
  ${({ theme, xl }) => theme.media.greaterThan('xl')`
    grid-template-columns: ${`repeat(${xl}, 1fr)`};
  `}
  ${({ theme, xxl }) => theme.media.greaterThan('xxl')`
    grid-template-columns: ${`repeat(${xxl}, 1fr)`};
  `}
`;

export default Grid;
