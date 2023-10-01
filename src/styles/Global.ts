import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html {
    padding: 0;
    margin: 0;

}
body{
margin: 0;
padding: 0;
background-color: ${(props) => props.theme.colors.secondary};
color: ${(props) => props.theme.colors.text};
}

ul, ol {
    margin: 0;
    padding:0;
}

a{
    text-decoration: none;
}

`;
