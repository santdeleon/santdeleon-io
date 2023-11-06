import { styled } from 'styled-components';
import { COLOR_NEUTRAL_6, COLOR_NEUTRAL_7 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { Card } from './Card';
import { Emoji } from './Emoji';

// =============================================================================
// Main Component
// =============================================================================

export const About = () => (
  <Card>
    <TextItalic>
      <i>Firstly – Welcome! Happy to have you here.</i>
    </TextItalic>
    <br />
    <Text>
      I&apos;m a self-taught programmer with a focus on <TextSemibold>TypeScript</TextSemibold> and{' '}
      <TextSemibold>React</TextSemibold>. I&apos;ve been involved in the blockchain & crypto space since 2017. One could
      say that I am incredibly passionate about the space – so much so that I signed on as the{' '}
      <TextSemibold>founding engineer</TextSemibold> of <TextSemibold>Phantom</TextSemibold>, a popular cryptocurrency
      wallet and am now working on my own startup <TextSemibold>Amoeba</TextSemibold>. I am very well-versed in all
      things blockchain and have a deep knowledge of the Solana, Ethereum and Bitcoin ecosystems. From time to time I
      contribute to open source code bases in the crypto sphere.
    </Text>
    <br />
    <Text>
      Along with programming, I also fall into the design side of things. Art is the true core of who I am and basically
      everything I do involves it so i&apos;m more of a UI/UX developer rather than a straight software engineer.
    </Text>
    <br />
    <Text>
      Outside of work I spend much of my time in nature <Emoji ariaLabel="Plant in Pot Emoji">🪴</Emoji>, exercising{' '}
      <Emoji ariaLabel="Man Weightlifter Emoji">🏋️‍♂️</Emoji>, reading <Emoji ariaLabel="Books Emoji">📚</Emoji>, enjoying
      espresso shots <Emoji ariaLabel="Coffee Emoji">☕️</Emoji> and riding my motorcycle{' '}
      <TextSemibold>"Honey"</TextSemibold> (a golden Royal Enfield Meteor{' '}
      <Emoji ariaLabel="Yellow Scooter and Smoke Emojis">🛵💨</Emoji>). There&apos;s certainly more to me and my story
      but I like keeping things concise so i&apos;ll leave it here. If you&apos;d like to learn more feel free to reach
      out to me at my email below. <Emoji ariaLabel="Woman Bowing Emoji">🙇‍♀️</Emoji>
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
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_7)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;

const TextSemibold = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 160%;
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_6 : COLOR_NEUTRAL_7)};
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    font-size: 1.25rem;
  `}
`;

const TextItalic = styled(Text)`
  color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_7 : COLOR_NEUTRAL_6)};
`;
