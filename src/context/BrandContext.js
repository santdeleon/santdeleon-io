import React, { createContext } from 'react';
import { oneOfType, array, object } from 'prop-types';
import { projects, social, technologies } from '../data';

const propTypes = {
  children: oneOfType([array, object]),
};

export const BrandContext = createContext();

export const BrandProvider = ({ children }) => (
  <BrandContext.Provider value={{ social, projects, technologies }}>
    {children}
  </BrandContext.Provider>
);
BrandProvider.propTypes = propTypes;
