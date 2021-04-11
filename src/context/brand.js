import React, { createContext, useContext } from 'react';
import { oneOfType, string, array, node } from 'prop-types';

import { social, skills, tech } from '../data';

export const BrandContext = createContext();

export const BrandProvider = ({ children }) => (
  <BrandContext.Provider value={{ social, skills, tech }}>
    {children}
  </BrandContext.Provider>
);
BrandProvider.propTypes = { children: oneOfType([string, array, node]) };

export const useBrand = () => useContext(BrandContext);

export default BrandProvider;
