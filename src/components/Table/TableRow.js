import styled from 'styled-components';

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  border-radius: 4px;
  padding: var(--spacer-size-200-rem) var(--spacer-size-400-rem);
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)'};
  }
  &:first-child {
    margin-bottom: -5px;
  }
`;

export default TableRow;
