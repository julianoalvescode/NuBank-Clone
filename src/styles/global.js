import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap');

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
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        font-size: .9rem;
    }


`;