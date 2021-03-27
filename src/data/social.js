import React from 'react';

import { Emoji } from '../components';

export const social = [
  {
    id: 0,
    name: 'GitHub',
    href: 'https://github.com/santdeleon',
    Emoji: (
      <Emoji alt="Cat Face Emoji" ariaLabel="Cat Face Emoji">
        🐱
      </Emoji>
    ),
  },
  {
    id: 1,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sant-deleon/',
    Emoji: (
      <Emoji alt="Link Emoji" ariaLabel="Link Emoji">
        🔗
      </Emoji>
    ),
  },
  {
    id: 3,
    name: 'Email',
    href: 'mailto:sant@santdeleon.io',
    Emoji: (
      <Emoji alt="CLipboard Emoji" ariaLabel="CLipboard Emoji">
        📋
      </Emoji>
    ),
  },
];
