import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext } from './Components/Shared/Components/ColorContext';
import { getDesignTokens } from './Components/Shared/styles/theme';
import Spinner from './Components/Shared/Components/Spinner';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

const LoginPage = React.lazy(() => import('./Pages/Onboarding/LoginPage'));

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      // eslint-disable-next-line
      createTheme(getDesignTokens(mode), {}),
    [mode]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              index
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <React.Suspense fallback={<Spinner />}>
                  <LoginPage />
                </React.Suspense>
              }
            />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
