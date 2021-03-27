import React from 'react';
import styled from 'styled-components';

import { Text, Row, AutoColumn, Column, Emoji } from '../components';

import { useBrand } from '../hooks';

const StyledDiv = styled.div`
  display: flex;
  align-items: start;
  ${({ theme }) => theme.media.greaterThan('md')`
    max-width: ${() => '60vw'}
  `}
`;

const Home = () => {
  const { projects, technologies } = useBrand();

  return (
    <>
      <Row className="my-6">
        <StyledDiv maxWidth="65vw">
          <Column>
            <Text fontSize={400}>
              <Emoji
                alt="Studio Microphone Emoji"
                ariaLabel="Studio Microphone Emoji"
              >
                🎙️
              </Emoji>
            </Text>
          </Column>
          <Column className="ml-6">
            <Text fontSize={300}>
              I&apos;m a human with an array of self taught skills. One of them
              happens to be software engineering. I tend to fall on the more
              creative side of engineering, working heavily on UI/UX in the form
              design or coding. As well as visually pleasing work, I also dive
              deep into the blockchain and cryptocurrency world where I spend a
              lot of my free time and mental energy. I&apos;m currently a
              Software Engineer at{' '}
              <a
                href="https://hostgator.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HostGator
              </a>
              , a web-hosting platform, and I also maintain{' '}
              <a
                href="https://github.com/santdeleon/liquidrainbowpony"
                target="_blank"
                rel="noopener noreferrer"
              >
                liquidrainbowpony
              </a>
              , a design system I created for personal applications. In my
              extra, extra spare time I lend my skills to the Ethereum Community
              by{' '}
              <a
                href="https://github.com/ethereum/ethereum-org-website/blob/dev/.all-contributorsrc#L2637-L2643"
                target="_blank"
                rel="noopener noreferrer"
              >
                contributing
              </a>{' '}
              to the{' '}
              <a
                href="https://ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethereum
              </a>{' '}
              website.
            </Text>
          </Column>
        </StyledDiv>
      </Row>
      <Row>
        <StyledDiv maxWidth="65vw">
          <Column>
            <Text fontSize={400}>
              <Emoji alt="Gear Emoji" ariaLabel="Gear Emoji">
                ⚙️
              </Emoji>
            </Text>
          </Column>
          <AutoColumn className="ml-6" gap="md">
            {projects.map(({ id, title, date, href }) => (
              <Column key={id}>
                <Text fontSize={300}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </Text>
                <Text fontSize={100}>{date}</Text>
              </Column>
            ))}
          </AutoColumn>
        </StyledDiv>
      </Row>
      <Row className="my-6">
        <StyledDiv maxWidth="65vw">
          <Column>
            <Text fontSize={400}>
              <Emoji alt="Laptop Emoji" ariaLabel="Laptop Emoji">
                💻
              </Emoji>
            </Text>
          </Column>
          <AutoColumn className="ml-6" gap="md">
            {technologies.map(({ id, name, languages }) => (
              <Column key={id}>
                <Text>
                  {languages.map((l, i) => (
                    <React.Fragment key={i}>
                      <code>{l}</code>
                      {i !== languages.length - 1 && <span>-</span>}
                    </React.Fragment>
                  ))}
                </Text>
              </Column>
            ))}
          </AutoColumn>
        </StyledDiv>
      </Row>
    </>
  );
};

export default Home;
