import { css, styled } from 'styled-components';
import LiquidWateringPlant from '../assets/img/liquid-watering-plant.svg';
import { COLOR_NEUTRAL_0, COLOR_NEUTRAL_2, COLOR_NEUTRAL_9, COLOR_NEUTRAL_10 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Row } from './Row';
import { Work } from './Work';

// =============================================================================
// Main Component
// =============================================================================

export const Layout = () => (
  <Container>
    <Navbar />
    {/* <Main>
      <Header />
      <Work />
    </Main> */}
    <Row justify="flex-end">
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

const Main = styled.main`
  margin: 2rem 0;
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

const Divider = styled.div`
  margin: 0 0 1rem 0;
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
