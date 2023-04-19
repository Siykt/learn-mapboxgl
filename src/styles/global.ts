import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    padding: 0;
    margin: 0;
  }

  #map {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
