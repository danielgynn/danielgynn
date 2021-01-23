import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { core_theme } from '../themes/core.theme';
import ThemeProvider from '../contexts/ThemeProvider';
import Footer from './General/Footer';
import Navigation from './General/Navigation';

const Container = styled.div`
	max-width: ${ props => props.theme.sizes.container.mobile };
	padding: 0 1.5rem;
	margin: 4rem auto 0 auto;

	${ breakpoint('md')`
		max-width: ${ props => props.theme.sizes.container.tablet };
		padding: 0 2rem;
	` }

	${ breakpoint('xl')`
		max-width: ${ props => props.theme.sizes.container.desktop };
		padding: 0 2rem;
	` }
`;

const PageLayout = ({
    title,
    initials,
    email,
    social,
    children,
    pages = []
}) => (
    <ThemeProvider theme={core_theme} className='App'>
        <div style={{fontFamily: 'Work Sans, sans-serif'}}>
            <Container>
                <Navigation title={ initials } pages={pages} />
            </Container>
            <Container>
                <main>
                    {children}
                </main>
            </Container>

            <Footer
                title={title}
                email={email}
                social={social}
                pages={pages}
            />
        </div>
    </ThemeProvider>
);

export default PageLayout;
