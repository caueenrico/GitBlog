import {createGlobalStyle} from 'styled-components';
import firaCode from "../../src/pages/assets/fonts/FiraCode-Regular.ttf";


export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
  }

  body{
    background: ${props => props.theme['background']};
    font-family: 'Nunito', sans-serif;
  }


`
