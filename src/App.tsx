import { css, styled } from 'styled-components';
import LiquidWateringPlant from './assets/img/liquid-watering-plant.svg';
import { About } from './components/About';
import { Emoji } from './components/Emoji';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Work } from './components/Work';
import {
  COLOR_BLUE_3,
  COLOR_GREEN_3,
  COLOR_NEUTRAL_0,
  COLOR_NEUTRAL_2,
  COLOR_NEUTRAL_9,
  COLOR_NEUTRAL_10,
  COLOR_ORANGE_3,
  COLOR_PINK_3,
  COLOR_PURPLE_2,
  COLOR_PURPLE_3,
  COLOR_PURPLE_9,
  COLOR_RED_5,
  COLOR_YELLOW_4,
} from './constants';
import { Breakpoint, isDarkTheme } from './theme';
import { hexToRGBA } from './utils';

// =============================================================================
// Main Component
// =============================================================================

export const App = () => (
  <Container>
    <Navbar />
    <RainbowDivider />
    <Header />
    <Main>
      <Section>
        <Badge>
          What I&apos;ve done <Emoji ariaLabel="Male Developer Emoji">👨🏽‍💻</Emoji>
        </Badge>
        <Work />
      </Section>
      <Section>
        <Badge>
          About me <Emoji ariaLabel="Male Developer Emoji">📝</Emoji>
        </Badge>
        <About />
      </Section>
    </Main>
    <Row>
      <StyledImage src={LiquidWateringPlant} alt="Liquid watering a plant" />
    </Row>
    <Divider />
    <Footer />
  </Container>
);

// =============================================================================
// Styled Components
// =============================================================================

const Container = styled.div`
  max-width: 1040px;
  padding: 2rem;
  margin: 0 auto;
`;

const RainbowDivider = styled.div`
  width: 100%;
  height: 0.1875rem;
  border-radius: 0.1875rem;
  margin: 2rem 0;
  background: linear-gradient(
    to right,
    ${COLOR_RED_5},
    ${COLOR_ORANGE_3},
    ${COLOR_YELLOW_4},
    ${COLOR_GREEN_3},
    ${COLOR_BLUE_3},
    ${COLOR_PURPLE_3},
    ${COLOR_PINK_3}
  );
`;

const Section = styled.section`
  margin-bottom: 6rem;
`;

const Divider = styled.div`
  margin-bottom: 2rem;
  height: 0.1875rem;
  background-repeat: repeat-x;
  background-size: 0.6rem 0.2rem;
  ${({ theme }) =>
    isDarkTheme(theme.mode)
      ? css`
          background-image: -webkit-gradient(90deg, ${COLOR_NEUTRAL_10} 30%, ${COLOR_NEUTRAL_9} 0);
          background-image: linear-gradient(90deg, ${COLOR_NEUTRAL_10} 30%, ${COLOR_NEUTRAL_9} 0);
        `
      : css`
          background-image: -webkit-gradient(90deg, ${COLOR_NEUTRAL_2} 30%, ${COLOR_NEUTRAL_0} 0);
          background-image: linear-gradient(90deg, ${COLOR_NEUTRAL_2} 30%, ${COLOR_NEUTRAL_0} 0);
        `}
`;

const Main = styled.main`
  margin: 4rem 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  line-height: 100%;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_PURPLE_2 : COLOR_PURPLE_9)};
  background-color: ${({ theme }) => (isDarkTheme(theme.mode) ? hexToRGBA(COLOR_PURPLE_9, 0.2) : COLOR_PURPLE_2)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.125rem;
  `}
`;

const StyledImage = styled.img`
  height: auto;
  width: 100px;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    width: 150px;
    max-width: 150px;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XL)`
    width: 200px;
    max-width: 200px;
  `}
`;
