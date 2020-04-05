import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

export default class ThemeContext extends Component {
    render() {
        const { children, theme, className } = this.props;

        return (
            <ThemeProvider theme={ theme } className={ className }>
                { children }
            </ThemeProvider>
        )
    }
}