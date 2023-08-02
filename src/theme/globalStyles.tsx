import { createGlobalStyle, css } from 'styled-components';
import { isDarkTheme } from './utils';
import '../fonts.css';
import {
  COLOR_BLUE_3,
  COLOR_GREEN_3,
  COLOR_NEUTRAL_0,
  COLOR_NEUTRAL_6,
  COLOR_NEUTRAL_7,
  COLOR_NEUTRAL_9,
  COLOR_NEUTRAL_10,
  COLOR_NEUTRAL_11,
  COLOR_ORANGE_3,
  COLOR_PINK_3,
  COLOR_PURPLE_3,
  COLOR_PURPLE_7,
  COLOR_RED_5,
  COLOR_YELLOW_4,
} from '../constants';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, input, textarea, button {
    font-family: Calibre, Helvetica, Arial, sans-serif;
    font-variant-numeric: tabular-nums;
  }
  html,
  body {
    font-family: Calibre, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: ${COLOR_NEUTRAL_11};
  }
  body {
    -webkit-font-kerning: normal;
    font-kerning: normal;
    overflow-x: hidden;
  }
  ::selection {
    background-color: ${COLOR_PURPLE_7};
    color: ${COLOR_NEUTRAL_0};
  }
  ::-webkit-scrollbar {
    width: 0.375rem;
    background-color: ${COLOR_PINK_3};
  }
  ::-webkit-scrollbar-thumb {
    height: 0.625rem;
    background: linear-gradient(
      to bottom,
      ${COLOR_RED_5},
      ${COLOR_ORANGE_3},
      ${COLOR_YELLOW_4},
      ${COLOR_GREEN_3},
      ${COLOR_BLUE_3},
      ${COLOR_PURPLE_3},
      ${COLOR_PINK_3}
    );  }
  ${({ theme }) => {
    if (isDarkTheme(theme.mode)) {
      return css`
        body {
          color: ${COLOR_NEUTRAL_7};
          background: ${COLOR_NEUTRAL_10};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          color: ${COLOR_NEUTRAL_0};
        }
      `;
    } else {
      return css`
        body {
          color: ${COLOR_NEUTRAL_6};
          background: ${COLOR_NEUTRAL_0};
        }
        h1,
        h2,
        h3,
        h4,
        h5 {
          color: ${COLOR_NEUTRAL_9};
        }
      `;
    }
  }}
`;
