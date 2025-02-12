import { styled } from 'styled-components';
import { COLOR_NEUTRAL_6, COLOR_NEUTRAL_8 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Card } from './Card';

// =============================================================================
// Main Component
// =============================================================================

export const About = () => (
  <Card>
    <Text>
      I&apos;m a programmer and blockchain enthusiast based in Houston, TX. I've spent most of my professional years as
      a music producer and audio engineer before falling down the cryptocurrency rabbit hole and teaching myself to code
      – where I've been for the past 8 years. You can currently find me riding my motorcycle around the city and working
      on personal projects in niche coffee shops.
    </Text>
  </Card>
);

// =============================================================================
// Styled Components
// =============================================================================

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  line-height: 160%;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_8)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;
