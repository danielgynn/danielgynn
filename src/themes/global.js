import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body.backgroundColor};
        font-family: ${(props) => props.theme.body.fontFamily};
        color: ${props => props.theme.body.color};
    }

    a {
        color: ${props => props.theme.colors.primary};
        box-shadow: none;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    ::selection {
        color: ${props => props.theme.colors.secondary}; 
        background: ${props => props.theme.colors.primary};
    }
`;

export default GlobalStyle;