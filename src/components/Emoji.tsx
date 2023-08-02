import React from 'react';

export const Emoji = React.memo(
  ({ ariaLabel, className, children, ...rest }: { ariaLabel: string } & React.HTMLProps<HTMLSpanElement>) => (
    <span role="img" aria-label={ariaLabel} className={className} {...rest}>
      {children}
    </span>
  ),
);
