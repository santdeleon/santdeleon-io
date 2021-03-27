import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';
import { BrandProvider } from './context/BrandContext';

import App from './App';

describe('the App component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <BrandProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrandProvider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
