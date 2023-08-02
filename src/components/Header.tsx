import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
import { Col } from './Col';
import { Emoji } from './Emoji';
import { Image } from './Image';
import { Row } from './Row';

// =============================================================================
// Header
// =============================================================================

export const Header = () => (
  <StyledHeader>
    <Tagline />
    <section>
      <Heading>
        Professional Stuff <Emoji ariaLabel="Male Developer Emoji">👨🏽‍💻</Emoji>
      </Heading>
    </section>
  </StyledHeader>
);

// -----------------------------------------------------------------------------

const StyledHeader = styled.header`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

const RainbowBorder = styled.div`
  width: 100%;
  height: 0.1875rem;
  border-radius: 0.1875rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #ffaaaa, #ffc26d, #ffdf6d, #a9eba3, #a1e4f0, #e5b4f2, #fecde6);
`;

// =============================================================================
// Tagline
// =============================================================================

const HELLO = ['H', 'e', 'l', 'l', 'o', ','];

const PHRASES = [
  'Blockchain Developer',
  'Coffee Drinker',
  'Manga Lover',
  'Anime Dweeb',
  'Gym Bro',
  'Tree Hugger',
  'Stargazer',
  'Alien Believer',
  'Crypto-head',
  'Art Enjooyer',
  'Tech Enthusiast',
  'Design Wizard',
  'Mint Tea Maniac',
  'Lover of Rainbows',
  'Sunshine Getter',
  'Leetcode Avoider',
  'Motorcycle Rider',
  'Skate-rat',
  'Comic Geek',
  'Philosopher',
  'Freedom Maximalist',
  'Poké Breeder',
  'Music Muncher',
];

// -----------------------------------------------------------------------------

const getRandomPhrase = (phrases: string[], currentPhrase: string): string => {
  const len = phrases.length;

  if (len === 1) return phrases[0];

  const min = 1;
  const max = len - 1;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  let phrase = phrases[rand];

  // prevent same consecutive phrase
  if (phrase === currentPhrase) {
    const idx = phrases.indexOf(phrase);
    let nextIdx = idx + 1;

    // use first phrase in phrases if next phrase would cause overflow
    if (nextIdx > max) {
      nextIdx = 0;
    }

    phrase = phrases[nextIdx];
  }

  return phrase;
};

// -----------------------------------------------------------------------------

const Tagline = () => {
  const [phrase, setPhrase] = useState(PHRASES[0]);

  // pull random phrase from phrases every 3 seconds
  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;

    interval = setInterval(() => {
      const word = getRandomPhrase(PHRASES, phrase);
      setPhrase(word);
    }, 3000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [phrase]);

  return (
    <Col>
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
        <Phrase>
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
    </Col>
  );
};

// -----------------------------------------------------------------------------

const Title = styled.h1`
  font-size: 1.75rem;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 2.25rem;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    font-size: 2.5rem;
  `}
  font-weight: 500;
  text-align: left;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_1 : COLOR_NEUTRAL_9)};
`;

const Subtitle = styled.p`
  font-size: 1rem;
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

const Phrase = styled.span`
  display: inline-flex;
  border-width: 0 0 0.1875rem 0;
  border-style: solid;
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
`;
