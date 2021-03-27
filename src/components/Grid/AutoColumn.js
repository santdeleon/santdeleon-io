import styled from 'styled-components';

const AutoColumn = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) =>
    (gap === 'sm' && 'var(--spacer-size-300-rem)') ||
    (gap === 'md' && 'var(--spacer-size-400-rem)') ||
    (gap === 'lg' && 'var(--spacer-size-500-rem)') ||
    gap};
  justify-items: ${({ justify }) => justify && justify};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
`;

export default AutoColumn;
