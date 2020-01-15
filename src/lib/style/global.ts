import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.font.family.base};
  }

  html, body, #root {
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryDark};
    height: 100%;
    width: 100vw;
  }
`;
