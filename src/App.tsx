import { css, styled } from 'styled-components';
import LiquidWateringPlant from './assets/img/liquid-watering-plant.svg';
import { About } from './components/About';
import { Emoji } from './components/Emoji';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Work } from './components/Work';
import { COLOR_NEUTRAL_0, COLOR_NEUTRAL_2, COLOR_NEUTRAL_9, COLOR_NEUTRAL_10 } from './constants';
import { Breakpoint, isDarkTheme } from './theme';

// =============================================================================
// Main Component
// =============================================================================

export const App = () => (
  <Container>
    <Navbar />
    <Divider margin="2rem 0" />
    <Header />
    <Main>
      <Section>
        <Heading>
          About Me <Emoji ariaLabel="Male Developer Emoji">🎙️</Emoji>
        </Heading>
        <About />
      </Section>
      <Section>
        <Heading>
          Recent Work <Emoji ariaLabel="Male Developer Emoji">👨‍💻</Emoji>
        </Heading>
        <Work />
      </Section>
    </Main>
    <Row>
      <StyledImage src={LiquidWateringPlant} alt="Liquid watering a plant" />
    </Row>
    <Divider margin="0 0 2rem 0" />
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Divider = styled.div<{ margin: string }>`
  margin: ${({ margin }) => margin};
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
  margin: 2rem 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Heading = styled.h5`
  font-size: 1.125rem;
  margin: 0 0 1rem 0;
  font-weight: 500;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.5rem;
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
