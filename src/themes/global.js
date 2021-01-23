import { createGlobalStyle } from "styled-components";

import {hexToRgb} from '../utils/color';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.body.fontFamily};
        font-size: ${props => props.theme.body.fontSize};
        color: ${props => props.theme.body.color};
    }

    p,
    a {
        width: auto;
        margin-right: 0px;
        margin-left: 0px;
        line-height: 20px;
        font-weight: 400;
    }

    a {
        border-bottom: 1px solid ${props => hexToRgb(props.theme.colors.primary, .5)};
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        box-shadow: none;
        display: inline-block;
        cursor: pointer;
        transition-property: background-color,color,text-decoration;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
    }

    a:hover {
        outline: 0;
        background-color: ${props => hexToRgb(props.theme.colors.primary, .15)};
    }

    ::selection {
        color: ${props => props.theme.colors.secondary}; 
        background: ${props => props.theme.colors.primary};
    }
`;

export default GlobalStyle;