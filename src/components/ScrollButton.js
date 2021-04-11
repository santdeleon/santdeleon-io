import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const StyledScrollButton = styled.button`
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 1;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#2d2d2d' : '#F6F6F6'};
  background: ${({ theme }) => (theme.mode === 'dark' ? '#222222' : '#ffffff')};
  outline: 0;
  transition: opacity 0.2s ease-out;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: var(--typography-size-400-rem);
  color: ${({ theme }) => (theme.mode === 'dark' ? '#5b5959' : '#d3d3d3')};
`;

const ScrollButton = () => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () =>
    window.pageYOffset > 300 ? setShow(true) : setShow(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <StyledScrollButton
      show={show}
      className="ScrollButton"
      onClick={scrollToTop}
    >
      <h3 className="d-flex justify-content-center align-items-center m-0">
        <StyledFontAwesomeIcon icon={faArrowUp} />
      </h3>
    </StyledScrollButton>
  );
};

export default ScrollButton;
