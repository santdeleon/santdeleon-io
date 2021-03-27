import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledModalScreenReaderText = styled.div`
  display: none;
`;

const propTypes = {
  title: string.isRequired,
};

const ModalScreenReaderText = ({ title }) => (
  <StyledModalScreenReaderText>
    This is a dialog window which overlays the main content of the page. The
    modal begins with a heading 2 titled &quot;{title}&quot;. Pressing the Modal
    close button at the top right hand side of the modal will close the modal
    and bring you back to where you were on the page.
  </StyledModalScreenReaderText>
);

ModalScreenReaderText.propTypes = propTypes;
export default ModalScreenReaderText;
