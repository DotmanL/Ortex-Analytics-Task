import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { ColorModeContext } from './Components/Shared/Components/ColorContext';

import Spinner from './Components/Shared/Components/Spinner';
// import LoginPage from './Pages/Onboarding/LoginPage';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

const LoginPage = React.lazy(() => import('./Pages/Onboarding/LoginPage'));

const queryClient = new QueryClient();

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        divider: amber[200],
        background: {
          default: 'white',
          paper: 'white',
        },
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});

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
      createTheme(getDesignTokens(mode), {

        spacing: (value: number) => `${value * 10}px`,
        typography: {
          fontFamily: [
            'Montserrat',
            'Montserrat Alternates',
            'Nunito',
            'Roboto',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 600,
          fontWeightBold: 900,
        },
      }),
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
