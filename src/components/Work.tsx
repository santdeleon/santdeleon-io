import React from 'react';
import styled, { css } from 'styled-components';
import BrandAmoeba from '../assets/img/brand-amoeba.svg';
import BrandHostgator from '../assets/img/brand-hostgator.svg';
import BrandPhantom from '../assets/img/brand-phantom.svg';
import {
  COLOR_NEUTRAL_0,
  COLOR_NEUTRAL_1,
  COLOR_NEUTRAL_6,
  COLOR_NEUTRAL_7,
  COLOR_NEUTRAL_9,
  COLOR_PURPLE_2,
  COLOR_PURPLE_7,
  COLOR_PURPLE_8,
  COLOR_PURPLE_9,
  COLOR_PURPLE_10,
} from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Card } from './Card';

// =============================================================================
// Work
// =============================================================================

const CARDS: {
  id: number;
  category: string;
  description: string;
  name: string;
  role: string;
  svg: string;
  timeframe: string;
  url: string | undefined;
}[] = [
  {
    id: 0,
    category: 'Blockchain & Crypto',
    description: "Super secret crypto venture that I can't actually give details about yet.",
    name: 'Amoeba',
    role: 'Founder',
    svg: BrandAmoeba,
    timeframe: 'Current',
    url: undefined,
  },
  {
    id: 1,
    category: 'Blockchain & Crypto',
    description: 'Multi-chain crypto wallet originally built on the Solana blockchain.',
    name: 'Phantom',
    role: 'Founding Engineer',
    svg: BrandPhantom,
    timeframe: 'June 2021 - Aug 2023',
    url: 'https://phantom.app',
  },
  {
    id: 2,
    category: 'Web Hosting',
    description: 'OG domain and web hosting platform for small to large businesses.',
    name: 'HostGator',
    role: 'Software Engineer',
    svg: BrandHostgator,
    timeframe: 'April 2019 - May 2021',
    url: 'https://hostgator.com',
  },
];

// -----------------------------------------------------------------------------

export const Work = () => (
  <Grid>
    {CARDS.map(({ id, category, description, name, role, svg, timeframe, url }, idx: number) => {
      const isAmoebaCard = name === 'Amoeba';

      return (
        <GridItem key={`${id}-${idx}`}>
          <Card>
            <CardImage src={svg} alt={`${name} Brand Logo`} />
            <CardTitle>{category}</CardTitle>
            <CardRow>
              <CardSubtitle>{role}</CardSubtitle>
              <CardSubtitle>{timeframe}</CardSubtitle>
            </CardRow>
            <CardDescription>{description}</CardDescription>
            <ButtonLink href={url} tabIndex={isAmoebaCard ? -1 : 0} disabled={isAmoebaCard}>
              View Site
            </ButtonLink>
          </Card>
        </GridItem>
      );
    })}
  </Grid>
);

// -----------------------------------------------------------------------------

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const GridItem = styled.div`
  align-self: stretch;
  justify-self: stretch;
`;

const CardImage = styled.img`
  margin-bottom: 1rem;
  height: 1.5rem;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
  height: 1.875rem;
  `}
`;

const CardTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_7)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;

// =============================================================================
// ButtonLink
// =============================================================================

const ButtonLink = React.memo(
  ({ href, disabled, className, tabIndex, children }: React.HTMLProps<HTMLAnchorElement>) => (
    <ButtonLinkPrimary href={href} className={className} tabIndex={tabIndex} $isDisabled={disabled}>
      {children}
    </ButtonLinkPrimary>
  ),
);

// -----------------------------------------------------------------------------

const StyledAnchor = styled.a.attrs<{ $isDisabled?: boolean }>({
  rel: 'noopener noreferrer',
  target: '_blank',
})`
  position: relative;
  padding: 0.25rem 0.5rem;
  display: inline-flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  white-space: nowrap;
  transform: translateY(0);
  transition: all 0.1s linear;
  font-weight: 500;
  line-height: 140%;
  outline-width: 0.1875rem;
  outline-style: solid;
  outline-color: transparent;
  ${({ $isDisabled }) => {
    if ($isDisabled) {
      return css`
        opacity: 60%;
        pointer-events: none;
      `;
    }
    return css`
      cursor: pointer;
      &:active:not(:focus-visible),
      &.active:not(:focus-visible) {
        transform: translateY(0.14rem);
      }
    `;
  }}
`;

const ButtonLinkPrimary = styled(StyledAnchor)`
  color: ${COLOR_NEUTRAL_0};
  background-color: ${COLOR_PURPLE_7};
  border-color: ${COLOR_PURPLE_9};
  box-shadow: 0 0.125rem 0 0 ${COLOR_PURPLE_9};
  &:focus-visible:not(:active),
  &.focus-visible:not(:active) {
    outline-color: ${COLOR_PURPLE_2};
  }
  &:hover,
  &.hover,
  &:focus-visible,
  &.focus-visible {
    background-color: ${COLOR_PURPLE_8};
    border-color: ${COLOR_PURPLE_10};
    box-shadow: 0 0.125rem 0 0 ${COLOR_PURPLE_10};
  }
  &:active,
  &.active {
    box-shadow: 0 0 0 0 ${COLOR_PURPLE_9};
  }
`;
