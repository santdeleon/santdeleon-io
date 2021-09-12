import styled from 'styled-components';

interface ColProps {
  align?: string;
  justify?: string;
  margin?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin};
`;

Col.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start',
};

export default Col;
