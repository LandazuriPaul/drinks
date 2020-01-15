import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import { Client } from '~/lib/api';
import { GlobalStyle, materialTheme, theme } from '~/lib/style';
import { Router } from '~/views/Router';
import { APP_ROOT } from '~/config';

import 'normalize.css';

const rootElement = document.getElementById(APP_ROOT);
function ReactApp() {
  return (
    <BrowserRouter>
      <ClientContextProvider client={Client}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MaterialThemeProvider theme={materialTheme}>
              <>
                <GlobalStyle />
                <Router />
              </>
            </MaterialThemeProvider>
          </ThemeProvider>
        </StylesProvider>
      </ClientContextProvider>
    </BrowserRouter>
  );
}
render(<ReactApp />, rootElement);
