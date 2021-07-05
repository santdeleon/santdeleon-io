import React from 'react';
import styled from 'styled-components';

interface EmojiProps {
  ariaLabel?: string;
  margin?: string;
  className?: string;
  children: React.ReactNodeArray | React.ReactNode;
}

const StyledEmoji = styled.span<EmojiProps>`
  margin: ${({ margin }) => margin};
`;

export const Emoji: React.FC<EmojiProps> = ({
  ariaLabel,
  margin,
  className,
  children,
}: EmojiProps) => (
  <StyledEmoji
    role="img"
    aria-label={ariaLabel}
    margin={margin}
    className={className}
  >
    {children}
  </StyledEmoji>
);

export default Emoji;
