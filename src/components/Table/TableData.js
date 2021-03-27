import styled from 'styled-components';

const TableData = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  &:not(:first-child) {
    padding: var(--spacer-size-300-rem) var(--spacer-size-400-rem);
    border-top: ${({ theme, border }) => {
      if (border) {
        return theme.mode === 'dark'
          ? '2px solid var(--color-neutral-1000)'
          : '2px solid var(--color-neutral-100)';
      }
    }};
  }
`;

export default TableData;
