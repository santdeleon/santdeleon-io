import styled from 'styled-components';

interface RowProps {
  align?: string;
  justify?: string;
  width?: string;
  margin?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`;

Row.defaultProps = {
  align: 'center',
  justify: 'flex-start',
  width: '100%',
};

export default Row;
