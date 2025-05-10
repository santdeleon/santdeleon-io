import { styled } from 'styled-components';
import { COLOR_NEUTRAL_6, COLOR_NEUTRAL_8 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Card } from './Card';

// =============================================================================
// Main Component
// =============================================================================

export const About = () => (
  <Card>
    <StyledP>
      I&apos;m a self-taught programmer based out of Houston, Texas. My early professional years were spent as a music
      producer and audio engineer before falling down the cryptocurrency rabbit hole – where i've spent the last 8
      years.
      <br />
      <br />
      When i'm not deep in the crypto trenches i'm usually studying piano or riding my motorcycle around the city.
      Anyway, that's a little bit of the good stuff. Give me a shout if you'd like to connect!
    </StyledP>
  </Card>
);

// =============================================================================
// Styled Components
// =============================================================================

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  line-height: 160%;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_8)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;
