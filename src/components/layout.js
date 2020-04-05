import React from "react";
import { Link } from "gatsby";
import Styled from 'styled-components';
import { core_theme } from '../themes/core.theme';
import ThemeProvider from '../contexts/ThemeProvider';
import breakpoint from 'styled-components-breakpoint';

import { rhythm, scale } from "../utils/typography";

const NavTitle = Styled.h3`
	font-family: Work Sans, sans-serif;
	font-size: 3rem;
	color: rgb(24, 24, 24);
`;

const Container = Styled.div`
	max-width: ${ props => props.theme.sizes.container.mobile };
	padding: 0 1.5rem;
	margin: 12rem auto 0 auto;

	${ breakpoint('md')`
		max-width: ${ props => props.theme.sizes.container.tablet };
		padding: 0 2rem;
	` }

	${ breakpoint('xl')`
		max-width: ${ props => props.theme.sizes.container.desktop };
		padding: 0 2rem;
	` }
`;

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Nav = props => (
	<nav style={{ marginBottom: `4.5rem`, padding: '2rem', position: 'fixed', top: 0, width: '100%' }}>
		<Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none', boxShadow: 'none', color: '#181818' }}>
			<NavTitle style={{ display: `inline` }}>{ props.title }</NavTitle>
		</Link>
		<ul style={{ listStyle: `none`, float: `right` }}>
			<ListLink to="/">About</ListLink>
			<ListLink to="/portfolio/">Portfolio</ListLink>
			<ListLink to="/blog/">Blog</ListLink>
			<ListLink to="/photos/">Photos</ListLink>
		</ul>
	</nav>
);

class Layout extends React.Component {
  render() {
    const { location, title, children, pageWidth } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div style={ {marginBottom: rhythm(2.5), textAlign: 'center'}}>
          <h1
            style={{
              ...scale(1.75),
              fontFamily: `Spectral, serif`,
              marginTop: '2rem',
              marginBottom: 0
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <p>
            Follow him on @
            <a href={`https://twitter.com/danielgynn`}>Twitter</a> or <a href={`https://instagram.com/danielgynn`}>Instagram</a>.
          </p>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Work Sans, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
		<ThemeProvider theme={ core_theme } className="App">
			<div style={ {fontFamily: 'Work Sans, sans-serif'} }>
				<Nav title={ title }></Nav>
				<Container>
					{/* <header>{header}</header> */}
					<main>{children}</main>

					<div style={ {
						height: '0.05rem',
						marginTop: '3rem',
						backgroundColor: '#555d66'
					}}></div>

					<footer style={ {marginTop: '3rem', marginBottom: '3rem'} }>
						© {new Date().getFullYear()}, Daniel Gynn. Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>.
					</footer>
				</Container>
			</div>
		</ThemeProvider>
    )
  }
}

export default Layout
