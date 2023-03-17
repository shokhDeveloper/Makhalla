import { createGlobalStyle } from "styled-components"
export const Global = createGlobalStyle`
    *::before, *::after, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Rubik";
    }
    .container_fluid{
        width: 96%;
        margin: 0 auto;
        padding: 0 5px;
    }
    ::-webkit-scrollbar{
        background: #fff;
        display: none;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #9B9B9B;
    }
`