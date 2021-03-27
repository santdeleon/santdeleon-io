import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  padding: ${({ padding }) => (padding ? padding : 'var(--spacer-size-0-rem)')};
  margin: ${({ margin }) => margin && margin};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
`;

export default Row;
