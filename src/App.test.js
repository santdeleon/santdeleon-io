import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';

import App from './App';

describe('the App component', () => {
  it('renders with a welcome message', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );
    const header = screen.getByRole('heading', { name: 'Hello, World!' });
    expect(header).toBeInTheDocument();
  });
});
