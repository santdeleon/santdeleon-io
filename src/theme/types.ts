import { z } from 'zod';

export const Theme = z.union([z.literal('light'), z.literal('dark')]);
export type Theme = z.infer<typeof Theme>;

export enum Breakpoint {
  XXXS = '320px',
  XXS = '375px',
  XS = '420px',
  SM = '576px',
  MD = '768px',
  LG = '992px',
  XL = '1024px',
  XXL = '1200px',
  XXXL = '1440px',
}
