import styled from 'styled-components';

const ToggleThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.25rem;
  left: -0.1875rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0.03, 0, 1);
`;

export default ToggleThumb;
