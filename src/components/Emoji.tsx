import React from 'react';

interface EmojiProps {
  ariaLabel: string;
  className?: string;
  children: React.ReactNodeArray | React.ReactNode;
}

export const Emoji: React.FC<EmojiProps> = ({
  ariaLabel,
  className,
  children,
}: EmojiProps) => (
  <span role="img" aria-label={ariaLabel} className={className}>
    {children}
  </span>
);

export default Emoji;
