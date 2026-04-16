import { createGlobalStyle } from "styled-components";
import DMSansFontSrc from "../assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf";

export default createGlobalStyle`
    // Vite doesn't handle urls in template literals as it does in 
    // regular CSS files! So we have to import and interpolate.
    @font-face {
        font-family: 'DM Sans';
        src: url(${DMSansFontSrc});
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    :root {
        /* Colours */
        --clr-neutral-900: #02012c;
        --clr-neutral-800: #262540;
        --clr-neutral-700: #302F4A;
        --clr-neutral-600: #3C3B5E;
        --clr-neutral-300: #ACACB7;
        --clr-neutral-200: #D4D3D9;
        --clr-neutral-000: #FFFFFF;
    
        --clr-orange-500: #FF820A;
        --clr-blue-500: #4658D9;
        --clr-blue-700: #2B1B9C;
    }
    
    body {
        background-color: var(--clr-neutral-900);
        color: var(--clr-neutral-000);
        font-family: 'DM Sans';
    }
`;
