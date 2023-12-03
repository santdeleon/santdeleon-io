import styled from 'styled-components';
import AvatarSant from '../assets/img/avatar-sant.svg';
import Moon from '../assets/img/sprite-moon.svg';
import Sun from '../assets/img/sprite-sun.svg';
import { COLOR_NEUTRAL_0, COLOR_NEUTRAL_2, COLOR_NEUTRAL_8, COLOR_NEUTRAL_10, COLOR_PURPLE_7 } from '../constants';
import { Breakpoint, isDarkTheme } from '../theme';
import { useTheme } from '../theme/context';

// =============================================================================
// Main Component
// =============================================================================

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = isDarkTheme(theme);
  const alt = `Activate ${isDark ? 'light' : 'dark'} mode`;

  return (
    <Row>
      <StyledDiv>
        <Avatar src={AvatarSant} />
      </StyledDiv>
      <StyledButton title={alt} onClick={toggleTheme}>
        <img src={isDark ? Moon : Sun} alt={alt} width={50} />
      </StyledButton>
    </Row>
  );
};

// =============================================================================
// Styled Components
// =============================================================================

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  border-radius: 50%;
  border-width: 0.1875rem;
  border-style: solid;
  border-color: ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_10 : COLOR_NEUTRAL_0)};
  box-shadow: 0 0 0 0.1875rem ${({ theme }) => (isDarkTheme(theme.mode) ? COLOR_NEUTRAL_8 : COLOR_NEUTRAL_2)};
  width: 3.75rem;
  height: 3.75rem;
  ${({ theme }) => theme.media.greaterThan(Breakpoint.MD)`
    width: 6.25rem;
    height: 6.25rem;
  `}
  ${({ theme }) => theme.media.greaterThan(Breakpoint.XXL)`
    width: 9.375rem;
    height: 9.375rem;
  `}
`;

const Avatar = styled.img.attrs({
  alt: 'Sant',
})`
  width: 100%;
  height: auto;
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
