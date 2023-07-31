import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './theme';

// import { GlobalStyles } from './theme/globalStyles';

const NODE = document.getElementById('root');

if (NODE !== null) {
  const ROOT = createRoot(NODE);

  ROOT.render(
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          {/* <GlobalStyles /> */}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>,
  );
}
