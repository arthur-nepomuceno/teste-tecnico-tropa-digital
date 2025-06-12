import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%; /* Garante que o corpo ocupe 100% da largura */
  }

  body {
    font-family: 'Poppins', sans-serif; /* A fonte na imagem se parece com Poppins ou similar */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F9FB; /* Cor de fundo predominante na imagem do layout */
  }
`;

export default GlobalStyle;