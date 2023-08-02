import React from 'react';
import styled from 'styled-components';

// =============================================================================
// Typedefs
// =============================================================================

interface EmojiProps extends React.HTMLProps<HTMLSpanElement> {
  ariaLabel: string;
  margin?: string;
}

// =============================================================================
// Main Component
// =============================================================================

export const Emoji = React.memo(({ ariaLabel, margin, className, children }: EmojiProps) => (
  <StyledSpan role="img" aria-label={ariaLabel} margin={margin} className={className}>
    {children}
  </StyledSpan>
));

// =============================================================================
// Styled Components
// =============================================================================

const StyledSpan = styled.span<{ margin: string | undefined }>`
  margin: ${({ margin }) => margin};
`;
