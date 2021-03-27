import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, input, textarea, button {
    font-family: 'SF Pro Display', Helvetica, sans-serif, system;
    font-display: fallback;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
    height: 100%;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-0)'
        : 'var(--color-neutral-1100)'};
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-0)'};
    border-width: 6px 0 0 0;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      #e92b2b,
      #ff9600,
      #ffc800,
      #6adb55,
      #50cce2,
      #bc3ede,
      #ff4dd3
    );
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-green-700)'
        : 'var(--color-pink-700)'};
    &:hover {
      color: ${({ theme }) =>
        theme.mode === 'dark'
          ? 'var(--color-green-800)'
          : 'var(--color-pink-900)'};
    }
  }

  code {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-green-700)'
        : 'var(--color-pink-800)'};
    background-color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-1100)'
        : 'var(--color-neutral-100)'};
    padding: var(--spacer-size-100-rem) var(--spacer-size-200-rem);
    border-radius: 3px;
  }

  ::-webkit-scrollbar {
    background-color: #ff4dd3;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: linear-gradient(
      to bottom,
      #ff4dd3,
      #bc3ede,
      #50cce2,
      #6adb55,
      #ffc800,
      #ff9600,
      #e92b2b
    );
  }

  ::selection {
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-1100)'};
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'var(--color-green-900)'
        : 'var(--color-pink-11000))'};
  }
`;

export default GlobalStyles;
