import styled from 'styled-components';
import Avatar from '../assets/img/avatar-sant.svg';
import Moon from '../assets/img/sprite-moon.svg';
import Sun from '../assets/img/sprite-sun.svg';
import { COLOR_NEUTRAL_1, COLOR_NEUTRAL_9, COLOR_PURPLE_7 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { useTheme } from '../theme/context';
import { Image } from './Image';
import { Row } from './Row';

// =============================================================================
// Main Component
// =============================================================================

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = isDarkTheme(theme);
  const avatarAlt = `Activate ${isDark ? 'light' : 'dark'} mode`;

  return (
    <StyledRow>
      <StyledDiv>
        <Image src={Avatar} alt="Avatar of Sant" width="100%" />
      </StyledDiv>
      <StyledButton title={avatarAlt} onClick={toggleTheme}>
        <Image src={isDark ? Moon : Sun} alt={avatarAlt} width={50} />
      </StyledButton>
    </StyledRow>
  );
};

// =============================================================================
// Styled Components
// =============================================================================

const StyledRow = styled(Row).attrs({
  justify: 'space-between',
})`
  padding-bottom: 2rem;
  border-width: 0 0 0.1875rem 0;
  border-style: solid;
  border-color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_9 : COLOR_NEUTRAL_1)};
`;

const StyledDiv = styled.div`
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0.1875rem;
  border-style: solid;
  border-color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_9 : COLOR_NEUTRAL_1)};
  width: 60px;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    width: 100px;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    width: 150px;
  `}
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  background-color: transparent;
  &:focus-visible {
    outline-width: 0.1875rem;
    outline-style: solid;
    outline-color: ${COLOR_PURPLE_7};
  }
`;
