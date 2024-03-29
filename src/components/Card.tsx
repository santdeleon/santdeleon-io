import styled, { css } from 'styled-components';
import { COLOR_NEUTRAL_0, COLOR_NEUTRAL_1, COLOR_NEUTRAL_9, COLOR_NEUTRAL_10 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';

export const Card = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 0.8rem;
  border-width: 0.125rem 0.125rem 0.25rem 0.125rem;
  border-style: solid;
  ${({ theme }) => {
    return isDarkTheme(theme.mode)
      ? css`
          border-color: ${COLOR_NEUTRAL_9};
          background-color: ${COLOR_NEUTRAL_10};
        `
      : css`
          border-color: ${COLOR_NEUTRAL_1};
          background-color: ${COLOR_NEUTRAL_0};
        `;
  }}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    padding: 1.25rem;
  `}
`;
