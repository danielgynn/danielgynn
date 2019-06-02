import React, { Component } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm, scale } from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";

class SiteIndex extends Component {
  render() {
    const { data, location } = this.props;
    const { author, title, mainDescription } = data.site.siteMetadata;

    return (
      <Layout location={ location } title={ title } pageWidth={ 36 }>
        <SEO title="Daniel Gynn" />

        <div style={ {
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={ {
            width: '50%',
            marginRight: '1rem'
          }}>
            <h2 style={
              {
                ...scale(1),
                fontFamily: `Spectral, serif`,
                marginTop: '0',
                fontStyle: 'italic',
                fontWeight: '400',
                lineHeight: '3rem'
              }}>
              Frontend Engineer & Product Designer based in London, UK.
            </h2>
            <p style={ {...scale(.25), fontWeight: '400', fontFamily: 'Work Sans, sans-serif'} }>
              { mainDescription }
            </p>
          </div>

          <div style={ {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '50%'
          }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 50,
                width: '80%'
              }}
              imgStyle={{
                width: `100%`,
              }}
            />
          </div>
        </div>

        <div>
          <h3 style={ {marginBottom: 0} }>Education</h3>
          <div style={ {marginTop: `${rhythm(1)}`} }>
            <p style={ {margin: '0'} }>Computer Science with a Year in Industry</p>
            <p style={ {margin: '0'} }><a href="https://www.kent.ac.uk/">University of Kent</a></p>
            <p style={ {margin: '0'} }>2013–2017</p>
          </div>
        </div>

        <div>
          <h3 style={ {marginBottom: 0} }>Experience</h3>
          <div style={ {marginTop: `${rhythm(1)}`} }>
            <p style={ {margin: '0'} }>Frontend Engineer, <a href="https://filament.ai">Filament AI</a></p>
            <p style={ {margin: '0'} }>2017—Present</p>
            <p style={ {margin: '0'} }></p>
          </div>

          <div style={ {marginTop: `${rhythm(1)}`} }>
            <p style={ {margin: '0'} }>Frontend Developer, <a href="https://repositive.io">Repositive</a></p>
            <p style={ {margin: '0'} }>2016—2017</p>
            <p style={ {margin: '0'} }></p>
          </div>

          <div style={ {marginTop: `${rhythm(1)}`} }>
            <p style={ {margin: '0'} }>Junior Web Developer, <a href="https://repositive.io">Repositive</a></p>
            <p style={ {margin: '0'} }>2015—2016</p>
            <p style={ {margin: '0'} }></p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SiteIndex;

export const pageQuery = graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
          siteMetadata {
              title
              author
              mainDescription
          }
      }
    }
`