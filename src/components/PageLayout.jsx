import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import { core_theme } from '../themes/core.theme';
import ThemeProvider from '../contexts/ThemeProvider';
import breakpoint from 'styled-components-breakpoint';

const NavTitle = Styled.h3`
	font-family: Work Sans, sans-serif;
	font-size: 3rem;
	color: ${ props => props.theme.colors.text };
	display: inline;
	transition: ${ props => props.theme.transitions.default };

	&:hover {
		color: ${ props => props.theme.colors.primary } !important;
	}
`;

const StyledNavbar = Styled.nav`
	margin-bottom: 4.5rem;
	padding: 2rem;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;

	${ breakpoint('md')`
		align-items: center;
		flex-direction: row;
	` }

	${ breakpoint('xl')`
		align-items: center;
		flex-direction: row;
	` }
`;

const StyledLink = Styled(Link)`
	color: ${ props => props.theme.colors.text } !important;
	transition: ${ props => props.theme.transitions.default };

	&:hover {
		color: ${ props => props.theme.colors.primary } !important;
	}
`;

const Container = Styled.div`
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

const Footer = Styled.footer`
	margin: 6rem auto;
	color: ${ props => props.theme.colors.textSecondary };
	font-size: .9rem;
`;

const ListLink = ({to, children}) => (
	<li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: '0' }}>
		<StyledLink activeStyle={ {fontWeight: '700'} } to={ to }>{ children }</StyledLink>
	</li>
);

const Nav = ({title}) => (
	<StyledNavbar>
		<StyledLink to='/' >
			<NavTitle>{ title }</NavTitle>
		</StyledLink>
		<ul style={{ listStyle: `none`, float: `right`, margin: '0', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
			<ListLink to='/'>About</ListLink>
			<ListLink to='/portfolio/'>Portfolio</ListLink>
			<ListLink to='/blog/'>Blog</ListLink>
			<ListLink to='/photos/'>Photos</ListLink>
		</ul>
	</StyledNavbar>
);

class PageLayout extends React.Component {
	render() {
		const { title, children } = this.props;
		
		return (
			<ThemeProvider theme={ core_theme } className='App'>
				<div style={ {fontFamily: 'Work Sans, sans-serif'} }>
					<Nav title={ title } />
					<Container>
						<main>
							{children}
						</main>

						<Footer>
							© { new Date().getFullYear() }, Daniel Gynn. Built with
							{` `}
							<a href='https://www.gatsbyjs.org'>Gatsby</a>.
						</Footer>
					</Container>
				</div>
			</ThemeProvider>
		)
	}
}

export default PageLayout;
