import { generateMedia } from 'styled-media-query';

export const BREAKPOINT_XXXS = 320;
export const BREAKPOINT_XXS = 375;
export const BREAKPOINT_XS = 425;
export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1024;
export const BREAKPOINT_XXL = 1440;
export const BREAKPOINT_XXXL = 2560;

const media = generateMedia({
  xxxs: `${BREAKPOINT_XXXS}px`,
  xxs: `${BREAKPOINT_XXS}px`,
  xs: `${BREAKPOINT_XS}px`,
  sm: `${BREAKPOINT_SM}px`,
  md: `${BREAKPOINT_MD}px`,
  lg: `${BREAKPOINT_LG}px`,
  xl: `${BREAKPOINT_XL}px`,
  xxl: `${BREAKPOINT_XXL}px`,
  xxxl: `${BREAKPOINT_XXXL}px`,
});

export default media;
