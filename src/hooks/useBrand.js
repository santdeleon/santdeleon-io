import { useContext } from 'react';
import { BrandContext } from '../context';

export const useBrand = () => useContext(BrandContext);
