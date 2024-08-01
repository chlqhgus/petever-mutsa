import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./color";
export const GlobalStyle = createGlobalStyle`
    ${reset}

    html{
        font-size:30px;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"LINESeedKR";
    }

    body{
        font-family:"LINESeedKR";
    }

    input{
        border:none;
        outline:none;
    }

    button{
        cursor:pointer;
        /* font-family:"LINESeedKR"; */
    }
`;
