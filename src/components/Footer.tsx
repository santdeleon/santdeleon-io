import styled from 'styled-components';
import {
  COLOR_NEUTRAL_1,
  COLOR_NEUTRAL_6,
  COLOR_NEUTRAL_7,
  COLOR_NEUTRAL_9,
  COLOR_PURPLE_6,
  COLOR_PURPLE_7,
} from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Emoji } from './Emoji';

// =============================================================================
// Main Component
// =============================================================================

export const Footer = () => (
  <footer>
    <Row>
      <StyledP>
        Made with
        <EmojiTwoHearts ariaLabel="Coffee Cup Emoji">☕️</EmojiTwoHearts> by Sant
      </StyledP>
      <Row>
        <StyledP>
          <Span>contact:</Span> <Link href="mailto:sant@santdeleon.io">sant@santdeleon.io</Link>
        </StyledP>
        <Divider>/</Divider>
        <StyledP>
          <Span>github:</Span>{' '}
          <Link href="https://github.com/santdeleon" target="_blank">
            santdeleon
          </Link>
        </StyledP>
      </Row>
    </Row>
  </footer>
);

// =============================================================================
// Styled Components
// =============================================================================

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_7)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.125rem;
  `}
`;

const EmojiTwoHearts = styled(Emoji)`
  margin-left: 0.25rem;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.125rem;
  `}
`;

const Divider = styled.div`
  margin: 0 0.25rem;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_PURPLE_6 : COLOR_PURPLE_7)};
`;

const Link = styled.a.attrs({
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
  border-radius: 0.25rem;
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_PURPLE_6 : COLOR_PURPLE_7)};
  }
  &:focus-visible {
    outline-width: 0.1875rem;
    outline-style: solid;
    outline-color: ${COLOR_PURPLE_7};
  }
`;
