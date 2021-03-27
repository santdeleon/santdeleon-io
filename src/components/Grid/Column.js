import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ centered }) => centered && '100%'};
  align-items: ${({ centered }) => centered && 'center'};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
`;

export default Column;
