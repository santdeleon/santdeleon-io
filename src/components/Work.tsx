import styled, { css } from 'styled-components';
import BrandAmoeba from '../assets/img/brand-amoeba.svg';
import BrandHostgator from '../assets/img/brand-hostgator.svg';
import BrandPhantom from '../assets/img/brand-phantom.svg';
import {
  COLOR_NEUTRAL_0,
  COLOR_NEUTRAL_1,
  COLOR_NEUTRAL_5,
  COLOR_NEUTRAL_8,
  COLOR_NEUTRAL_9,
  COLOR_NEUTRAL_10,
} from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Row } from './Row';

// =============================================================================
// Typedefs
// =============================================================================

type TCard = {
  id: number;
  category: string;
  description: string;
  name: string;
  role: string;
  svg: string;
  timeframe: string;
  url: string | undefined;
};

// =============================================================================
// Constants
// =============================================================================

const CARDS: TCard[] = [
  {
    id: 0,
    category: 'Blockchain & Crypto',
    description: "A super secret crypto startup that I can't give any details about at the moment.",
    name: 'Amoeba',
    role: 'Founder',
    svg: BrandAmoeba,
    timeframe: 'Current',
    url: '__NULL',
  },
  {
    id: 1,
    category: 'Blockchain & Crypto',
    description: 'A multi-chain crypto wallet originally built on the Solana blockchain.',
    name: 'Phantom',
    role: 'Founding Engineer',
    svg: BrandPhantom,
    timeframe: 'June 2021 - Aug 2023',
    url: 'https://phantom.app',
  },
  {
    id: 2,
    category: 'Web Hosting',
    description: 'An OG domain and web hosting company for small to large businesses.',
    name: 'HostGator',
    role: 'Software Engineer',
    svg: BrandHostgator,
    timeframe: 'April 2019 - May 2021',

    url: 'https://hostgator.com',
  },
];

// =============================================================================
// Main Component
// =============================================================================

export const Work = () => {
  return (
    <StyledDiv>
      {CARDS.map(({ id, category, description, name, role, svg, timeframe, url }, idx: number) => (
        <CardContainer key={`${id}-${idx}`}>
          <Card>
            <CardHeader>
              <CardImage src={svg} alt={`${name} Brand Logo`} />
              <CardCategory>{category}</CardCategory>
              <Row align="center" justify="space-between">
                <CardTimeframe>{role}</CardTimeframe>
                <CardTimeframe>{timeframe}</CardTimeframe>
              </Row>
            </CardHeader>
            {/* <CardDivider /> */}
            <CardDescription>{description}</CardDescription>
            <CardLink href={url} $isDisabled={name === 'Amoeba'}>
              View Site
            </CardLink>
          </Card>
        </CardContainer>
      ))}
    </StyledDiv>
  );
};

// =============================================================================
// Styled Components
// =============================================================================

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const CardContainer = styled.div`
  &:not(last-child) {
    margin-bottom: 2rem;
  }
  width: 100%;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    width: 45%;
  `}
`;

const Card = styled.div`
  position: relative;
  padding: 1.5rem;
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
`;

const CardHeader = styled.div``;

const CardImage = styled.img.attrs({
  height: 30,
})`
  height: 30;
  margin-bottom: 1rem;
`;

const CardCategory = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
`;

const CardTimeframe = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`;

const CardLink = styled.a.attrs<{ $isDisabled: boolean }>({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
  ${({ $isDisabled }) => {
    return $isDisabled
      ? css`
          pointer-events: none;
          color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_8 : COLOR_NEUTRAL_5)};
        `
      : css``;
  }}
`;
