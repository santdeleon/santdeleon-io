import styled from 'styled-components';

import {
  Small,
  P,
  PLead,
  PLeadLarge,
  H5,
  H4,
  H3,
  H2,
  H1,
  Display3,
  Display2,
  Display1,
} from './Text';

const Box = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)'};
  border-width: 0.125rem 0.125rem 0.25rem;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)'};
  border-radius: 0.5rem;
  padding: ${({ padding }) =>
    padding ? padding : 'var(--spacer-size-400-rem)'};
  margin: ${({ margin }) => margin && margin};
  width: ${({ width }) => width && width};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  ${Small} {
    color: ${({ theme }) =>
      theme.mode === 'dark' && 'var(--color-neutral-500)'};
  }
  ${P} {
    color: ${({ theme }) =>
      theme.mode === 'dark' && 'var(--color-neutral-500)'};
  }
  ${PLead} {
    color: ${({ theme }) =>
      theme.mode === 'dark' && 'var(--color-neutral-500)'};
  }
  ${PLeadLarge} {
    color: ${({ theme }) =>
      theme.mode === 'dark' && 'var(--color-neutral-500)'};
  }
  ${H5} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${H4} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${H3} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${H2} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${H1} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${Display3} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${Display2} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
  ${Display1} {
    color: ${({ theme }) => theme.mode === 'dark' && 'var(--color-neutral-0)'};
  }
`;

export default Box;
