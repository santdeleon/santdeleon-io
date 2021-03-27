import React from 'react';
import { number, string, oneOfType, func, array, object } from 'prop-types';

import {
  Small,
  P,
  PLead,
  PLeadLarge,
  H5,
  H4,
  H3,
  H2,
  H1,
  Display3,
  Display2,
  Display1,
} from '.';

const propTypes = {
  fontSize: number,
  fontWeight: string,
  children: oneOfType([array, object, string, func, number]),
};

const Text = ({ fontSize, fontWeight, children, ...props }) => {
  switch (true) {
    case fontSize === 1200:
      return (
        <Display1 fontWeight={fontWeight} {...props}>
          {children}
        </Display1>
      );
    case fontSize === 1100:
      return (
        <Display2 fontWeight={fontWeight} {...props}>
          {children}
        </Display2>
      );
    case fontSize === 1000:
      return (
        <Display3 fontWeight={fontWeight} {...props}>
          {children}
        </Display3>
      );
    case fontSize === 900:
      return (
        <H1 fontWeight={fontWeight} {...props}>
          {children}
        </H1>
      );
    case fontSize === 800:
      return (
        <H2 fontWeight={fontWeight} {...props}>
          {children}
        </H2>
      );
    case fontSize === 700:
      return (
        <H3 fontWeight={fontWeight} {...props}>
          {children}
        </H3>
      );
    case fontSize === 600:
      return (
        <H4 fontWeight={fontWeight} {...props}>
          {children}
        </H4>
      );
    case fontSize === 500:
      return (
        <H5 fontWeight={fontWeight} {...props}>
          {children}
        </H5>
      );
    case fontSize === 400:
      return (
        <PLeadLarge fontWeight={fontWeight} {...props}>
          {children}
        </PLeadLarge>
      );
    case fontSize === 300:
      return (
        <PLead fontWeight={fontWeight} {...props}>
          {children}
        </PLead>
      );
    case fontSize === 200:
      return (
        <P fontWeight={fontWeight} {...props}>
          {children}
        </P>
      );
    case fontSize === 100:
      return (
        <Small fontWeight={fontWeight} {...props}>
          {children}
        </Small>
      );
    default:
      return (
        <P fontWeight={fontWeight} {...props}>
          {children}
        </P>
      );
  }
};

Text.propTypes = propTypes;
export default Text;
