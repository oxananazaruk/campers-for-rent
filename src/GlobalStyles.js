import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './vars.js';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.main};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .container {
        width: 1240px;
        padding: 0 20px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }

    
    .disable-scroll {
        overflow: hidden;
    }
`;