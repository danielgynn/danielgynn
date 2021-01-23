import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../themes/global';

const ThemeContext = ({
    children,
    theme,
    className
}) => (
    <ThemeProvider theme={ theme } className={ className }>
        <GlobalStyle />
        { children }
    </ThemeProvider>
);

export default ThemeContext;