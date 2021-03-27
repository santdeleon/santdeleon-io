import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  /* Bring these in when there are more songs for listening */
  /*
  border-top: ${({ theme }) =>
    theme.mode === 'dark'
      ? '2px solid var(--color-neutral-1100)'
      : '2px solid var(--color-neutral-100)'};
  border-bottom: ${({ theme }) =>
    theme.mode === 'dark'
      ? '2px solid var(--color-neutral-1100)'
      : '2px solid var(--color-neutral-100)'};*/
`;

export default Table;
