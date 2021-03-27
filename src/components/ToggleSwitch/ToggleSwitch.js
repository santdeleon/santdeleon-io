import React from 'react';
import { func, string, oneOfType, array, object } from 'prop-types';
import styled from 'styled-components';

import { ToggleThumb, ToggleTrack } from '.';

const StyledToggleSwitch = styled.div`
  display: flex;
  ${ToggleTrack} {
    border-style: solid;
    border-width: 0.1875rem;
    border-color: ${({ on, isThemeToggle }) => {
      if (isThemeToggle) {
        return on === 'true'
          ? 'var(--color-purple-1000)'
          : 'var(--color-neutral-900)';
      } else {
        return on === 'true'
          ? 'var(--color-green-900)'
          : 'var(--color-neutral-400)';
      }
    }};
    background-color: ${({ on, isThemeToggle }) => {
      if (isThemeToggle) {
        return on === 'true'
          ? 'var(--color-purple-1100)'
          : 'var(--color-neutral-700)';
      } else {
        return on === 'true'
          ? 'var(--color-green-1000)'
          : 'var(--color-neutral-200)';
      }
    }};
  }
  ${ToggleThumb} {
    border-style: solid;
    border-width: 0.1875rem;
    transform: ${({ on }) =>
      on === 'true' ? 'translateX(18px)' : 'translateX(-2px)'};
    border-color: ${({ on, isThemeToggle }) => {
      if (isThemeToggle) {
        return on === 'true'
          ? 'var(--color-purple-900)'
          : 'var(--color-neutral-900)';
      } else {
        return on === 'true'
          ? 'var(--color-green-900)'
          : 'var(--color-neutral-400)';
      }
    }};
    background-color: ${({ on, isThemeToggle }) => {
      if (isThemeToggle) {
        return on === 'true'
          ? 'var(--color-purple-900)'
          : 'var(--color-neutral-900)';
      } else {
        return on === 'true'
          ? 'var(--color-green-700)'
          : 'var(--color-neutral-0)';
      }
    }};
  }
`;

const propTypes = {
  id: string.isRequired,
  title: string,
  ariaLabel: string.isRequired,
  onClick: func.isRequired,
  on: string.isRequired,
  children: oneOfType([array, object, func]),
};

const ToggleSwitch = ({
  id,
  title,
  ariaLabel,
  onClick,
  on,
  children,
  ...props
}) => (
  <StyledToggleSwitch id={id} on={on} {...props}>
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
