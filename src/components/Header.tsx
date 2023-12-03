import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  COLOR_BLUE_6,
  COLOR_BLUE_7,
  COLOR_GREEN_6,
  COLOR_GREEN_7,
  COLOR_NEUTRAL_1,
  COLOR_NEUTRAL_6,
  COLOR_NEUTRAL_7,
  COLOR_NEUTRAL_9,
  COLOR_ORANGE_6,
  COLOR_ORANGE_7,
  COLOR_PINK_6,
  COLOR_PINK_7,
  COLOR_PURPLE_2,
  COLOR_PURPLE_6,
  COLOR_PURPLE_7,
  COLOR_RED_6,
  COLOR_RED_7,
  COLOR_YELLOW_6,
  COLOR_YELLOW_7,
} from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Emoji } from './Emoji';

// =============================================================================
// Header
// =============================================================================

export const Header = () => (
  <StyledHeader>
    <Tagline />
  </StyledHeader>
);

// -----------------------------------------------------------------------------

const StyledHeader = styled.header`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

// =============================================================================
// Tagline
// =============================================================================

const HELLO = ['H', 'e', 'l', 'l', 'o', ','];

const PHRASES = [
  'Crypto-head',
  'Coffee Drinker',
  'Manga Reader',
  'Stargazer',
  'Alien Believer?',
  'Art Worshipper',
  'Tech Enthusiast',
  'Design Wizard',
  'Anime Dweeb',
  'Motorcycle Guy',
  'Skate-rat',
  'Comic Geek',
  'Philosopher',
  'Freedom Maxi',
  'Bitcoin Bandit',
  'Music Moonboy',
  'Ethereum Eater',
  'AI Abuser',
  'Neanderthal',
  'Guitar Noodler',
  'Espresso Buster',
];

const [FIRST_PHRASE] = PHRASES;

// -----------------------------------------------------------------------------

const getNextPhrase = (currentPhrase: string): string => {
  const nextIndex = PHRASES.indexOf(currentPhrase) + 1;
  return nextIndex >= PHRASES.length - 1 ? FIRST_PHRASE : PHRASES[nextIndex];
};

// -----------------------------------------------------------------------------

const Tagline = () => {
  const [phrase, setPhrase] = useState(FIRST_PHRASE);

  const changePhrase = useCallback(() => setPhrase(getNextPhrase(phrase)), [phrase]);

  // pull random phrase from phrases every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => changePhrase(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [changePhrase]);

  return (
    <Column>
      <Title>
        <RainbowText>
          {HELLO.map((letter, i) => (
            <span key={`hello-${letter}-${i}`}>
              <RainbowMotionDiv>{letter}</RainbowMotionDiv>
            </span>
          ))}
        </RainbowText>{' '}
        I&apos;m Sant.
        <br /> Front-end Engineer &{' '}
        <Phrase onClick={changePhrase}>
          {[...phrase].map((letter, i) => (
            <MovingMotionDiv key={`phrase-${letter}-${i}`} $hasMarginLeft={letter.charCodeAt(0) === 32}>
              {letter}
            </MovingMotionDiv>
          ))}
        </Phrase>
      </Title>
      <Subtitle>
        with a knack for creating cutting edge products with elegance and style{' '}
        <Emoji ariaLabel="Sparkle Emoji">✨</Emoji>
      </Subtitle>
    </Column>
  );
};

// -----------------------------------------------------------------------------

const Column = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 2.25rem;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    font-size: 2.5rem;
  `}
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.5rem;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    font-size: 1.75rem;
  `}
  font-weight: 300;
  text-align: left;
  margin: 0 0 0.5rem 0;
  ${({ theme }) => {
    return isDarkTheme(theme.mode)
      ? css`
          color: ${COLOR_NEUTRAL_6};
        `
      : css`
          color: ${COLOR_NEUTRAL_7};
        `;
  }}
`;

const RainbowText = styled.span`
  cursor: pointer;
  ${({ theme }) => {
    return isDarkTheme(theme.mode)
      ? css`
          span {
            &:nth-child(1) {
              color: ${COLOR_RED_6};
            }
            &:nth-child(2) {
              color: ${COLOR_ORANGE_6};
            }
            &:nth-child(3) {
              color: ${COLOR_YELLOW_6};
            }
            &:nth-child(4) {
              color: ${COLOR_GREEN_6};
            }
            &:nth-child(5) {
              color: ${COLOR_BLUE_6};
            }
            &:nth-child(6) {
              color: ${COLOR_PURPLE_6};
            }
            &:nth-child(7) {
              color: ${COLOR_PINK_6};
            }
          }
        `
      : css`
          span {
            &:nth-child(1) {
              color: ${COLOR_RED_7};
            }
            &:nth-child(2) {
              color: ${COLOR_ORANGE_7};
            }
            &:nth-child(3) {
              color: ${COLOR_YELLOW_7};
            }
            &:nth-child(4) {
              color: ${COLOR_GREEN_7};
            }
            &:nth-child(5) {
              color: ${COLOR_BLUE_7};
            }
            &:nth-child(6) {
              color: ${COLOR_PURPLE_7};
            }
            &:nth-child(7) {
              color: ${COLOR_PINK_7};
            }
          }
        `;
  }}
`;

const RainbowMotionDiv = styled(motion.div).attrs({
  whileHover: { scale: 1.3 },
})`
  display: inline-block;
`;

const MovingMotionDiv = styled(motion.div).attrs<{ $hasMarginLeft: boolean }>({
  initial: { y: -10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
  transition: { duration: 0.5 },
})`
  margin-left: ${({ $hasMarginLeft }) => ($hasMarginLeft ? '0.5rem' : undefined)};
`;

const Phrase = styled.button`
  display: inline-flex;
  cursor: pointer;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 500;
  border-width: 0 0 0.1875rem 0;
  border-style: solid;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: transparent;
  &:focus-visible {
    outline-width: 0.1875rem;
    outline-style: solid;
    outline-color: ${COLOR_PURPLE_7};
  }
  ${({ theme }) => {
    return isDarkTheme(theme.mode)
      ? css`
          color: ${COLOR_PURPLE_2};
          border-color: ${COLOR_PURPLE_7};
        `
      : css`
          color: ${COLOR_PURPLE_7};
          border-color: ${COLOR_PURPLE_2};
        `;
  }}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 2.25rem;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    font-size: 2.5rem;
  `}
`;
