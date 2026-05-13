import { createGlobalStyle, css } from "styled-components";
import DMSansFontSrc from "../assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf";
import BricolageFontSrc from "../assets/fonts/Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'DM Sans';
        src: url(${DMSansFontSrc});
    }

    @font-face {
        font-family: 'Bricolage Grotesque';
        src: url(${BricolageFontSrc});
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    ol, ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    html {
      min-height: 100%;
    }

    body {
        min-height: 100%;
        padding: 0;
        margin: 0;
    }

    #root {
        height: auto;
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
        --clr-neutral-000: #FFF;
        --clr-orange-500: #FF820A;
        --clr-blue-500: #4658D9;
        --clr-blue-700: #2B1B9C;

        /* Font sizes */
        --font-size-100: ${96 / 16}rem;
        --font-size-200: ${52 / 16}rem;
        --font-size-300: ${32 / 16}rem;
        --font-size-400: ${28 / 16}rem;
        --font-size-500: ${20 / 16}rem;
        --font-size-600: ${18 / 16}rem;
        --font-size-700: ${16 / 16}rem;
        --font-size-800: ${14 / 16}rem;
    }
    
    body {
        background-color: var(--clr-neutral-900);
        color: var(--clr-neutral-000);
        font-family: 'DM Sans', sans-serif;
        line-height: 1.2;
    }
`;

export const textPreset1 = css`
  font-size: var(--font-size-100);
  letter-spacing: -2px;
  line-height: 1;
  font-family: "DM Sans", sans-serif;
  font-style: italic;
  font-weight: 600;
`;

export const textPreset2 = css`
  font-size: var(--font-size-200);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "Bricolage Grotesque", serif;
  font-weight: 700;
`;

export const textPreset3 = css`
  font-size: var(--font-size-300);
  letter-spacing: 0;
  line-height: 1;
  font-family: "DM Sans", sans-serif;
  font-weight: 300;
`;

export const textPreset4 = css`
  font-size: var(--font-size-400);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
`;

export const textPreset5 = css`
  font-size: var(--font-size-500);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
`;

export const textPreset5Medium = css`
  font-size: var(--font-size-500);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
`;

export const textPreset6 = css`
  font-size: var(--font-size-600);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
`;

export const textPreset7 = css`
  font-size: var(--font-size-700);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
`;

export const textPreset8 = css`
  font-size: var(--font-size-800);
  letter-spacing: 0;
  line-height: 1.2;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
`;
