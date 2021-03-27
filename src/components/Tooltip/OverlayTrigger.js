import React from 'react';
import { string, array, object, oneOfType, func } from 'prop-types';
import styled from 'styled-components';

import { TooltipTop, TooltipRight, TooltipBottom, TooltipLeft } from '.';

const OverlayTriggerBase = styled.div`
  position: relative;
  display: inline-flex;
  &:hover {
    ${TooltipTop} {
      visibility: visible;
    }
    ${TooltipRight} {
      visibility: visible;
    }
    ${TooltipBottom} {
      visibility: visible;
    }
    ${TooltipLeft} {
      visibility: visible;
    }
  }
`;

const OverlayTrigger = ({ overlay, children, ...props }) => (
  <OverlayTriggerBase {...props}>
    {overlay}
    {children}
  </OverlayTriggerBase>
);

OverlayTrigger.propTypes = {
  overlay: oneOfType([array, object, string, func]).isRequired,
  children: oneOfType([array, object, string, func]).isRequired,
};
export default OverlayTrigger;
