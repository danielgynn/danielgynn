import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Nav = props => (
  <nav style={{ marginBottom: `4.5rem`, padding: '2rem', position: 'fixed', top: 0, width: '100%' }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>{ props.title }</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">About</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
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
      <div style={ {fontFamily: 'Work Sans, sans-serif'} }>
        <Nav title={ title }></Nav>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            marginTop: '4rem',
            maxWidth: rhythm(pageWidth || 24),
            padding: `${rhythm(1.5)} ${rhythm(2 / 4)}`,
          }}>

          <header>{header}</header>
          <main>{children}</main>

          <div style={ {
            height: '0.1rem',
            marginTop: '3rem',
            backgroundColor: '#000000'
          }}></div>

          <footer style={ {marginTop: '3rem'} }>
            © {new Date().getFullYear()}, Daniel Gynn. Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
