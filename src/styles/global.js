import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    body {
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        font-size: .9rem;

      a {
        font-family: 'Nunito'
        }

      button {
        font-family: 'Nunito';
        }

    }


`;