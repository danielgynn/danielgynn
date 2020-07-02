import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import { core_theme } from '../themes/core.theme';
import ThemeProvider from '../contexts/ThemeProvider';
import breakpoint from 'styled-components-breakpoint';

const NavTitle = Styled.h3`
	font-family: Spectral, serif;
	font-size: 2.75rem;
	font-style: italic;
	color: ${ props => props.theme.colors.text };
	display: inline;
	font-weight: 900;
	transition: ${ props => props.theme.transitions.default };

	&:hover {
		color: ${ props => props.theme.colors.primary } !important;
	}
`;

const StyledNavbar = Styled.nav`
	margin-bottom: 4.5rem;
	padding: 0rem 0rem 3rem;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;

	${ breakpoint('md')`
		padding: 3rem 0rem;
		align-items: center;
		flex-direction: row;
	` }

	${ breakpoint('xl')`
		padding: 3rem 0rem;
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
	font-size: .9rem;
	margin-top: 3rem;
	background: ${props => props.theme.colors.secondary};
	padding-top: 3rem;
	padding-bottom: 3rem;

	> div {
		max-width: ${ props => props.theme.sizes.container.mobile };
		margin: 0 auto;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		padding: 0 1.5rem;

		${ breakpoint('md')`
			max-width: ${ props => props.theme.sizes.container.tablet };
			padding: 0 2rem;
			align-items: flex-end;
			flex-direction: row;
		` }

		${ breakpoint('xl')`
			max-width: ${ props => props.theme.sizes.container.desktop };
			padding: 0 2rem;
			align-items: flex-end;
			flex-direction: row;
		` }
	}
`;

const FooterText = Styled.p`
	margin: 0;
`;

const FooterLinks = Styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
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
			{/* <ListLink to='/portfolio/'>Portfolio</ListLink> */}
			{/* <ListLink to='/blog/'>Blog</ListLink> */}
			<ListLink to='/photos/'>Photography</ListLink>
		</ul>
	</StyledNavbar>
);

class PageLayout extends React.Component {
	render() {
		const { title, initials, email, social, children } = this.props;

		console.log(social);
		
		return (
			<ThemeProvider theme={ core_theme } className='App'>
				<div style={ {fontFamily: 'Work Sans, sans-serif'} }>
					<Container>
						<Nav title={ initials } />
					</Container>
					<Container>
						<main>
							{children}
						</main>
					</Container>

					<Footer>
						<div>
							<div>
								<FooterText><strong>{title}</strong></FooterText>
								<FooterText>{email}</FooterText>
							</div>

							{social && (
								<FooterLinks>
									<a href={social.twitter} target='_blank' rel='noopener noreferrer'>Twitter</a>
									<a href={social.instagram} target='_blank' rel='noopener noreferrer'>Instagram</a>
									<a href={social.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
									<a href={social.goodreads} target='_blank' rel='noopener noreferrer'>Goodreads</a>
								</FooterLinks>
							)}
						</div>
					</Footer>
				</div>
			</ThemeProvider>
		)
	}
}

export default PageLayout;
