import React from 'react';
import { func, string, oneOfType, array, node } from 'prop-types';
import styled from 'styled-components';

import { ToggleThumb } from './ToggleThumb';
import { ToggleTrack } from './ToggleTrack';

const StyledToggleSwitch = styled.div`
  display: flex;
  ${ToggleTrack} {
    border-style: solid;
    border-width: 2px;
    border-color: ${({ on }) => {
      return on === 'true' ? '#3c1e70' : '#d1d5da';
    }};
    background-color: ${({ on }) => {
      return on === 'true' ? '#271052' : 'transparent';
    }};
  }
  ${ToggleThumb} {
    border-style: solid;
    border-width: 2px;
    transform: ${({ on }) =>
      on === 'true' ? 'translateX(18px)' : 'translateX(-2px)'};
    border-color: ${({ on }) => {
      return on === 'true' ? '#6e40c9' : '#d1d5da';
    }};
    background-color: ${({ on }) => {
      return on === 'true' ? '#6e40c9' : '#FFFFFF';
    }};
  }
`;

const propTypes = {
  title: string,
  ariaLabel: string.isRequired,
  onClick: func.isRequired,
  on: string.isRequired,
  children: oneOfType([array, node, string]),
};

const ToggleSwitch = ({
  title,
  ariaLabel,
  onClick,
  on,
  children,
  ...props
}) => (
  <StyledToggleSwitch on={on} {...props}>
    <ToggleTrack>
      <ToggleThumb
        role="checkbox"
        title={title}
        aria-label={ariaLabel}
        aria-checked={on}
        onClick={onClick}
      >
        {children}
      </ToggleThumb>
    </ToggleTrack>
  </StyledToggleSwitch>
);

ToggleSwitch.propTypes = propTypes;
export default ToggleSwitch;
