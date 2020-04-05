import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PhotosIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.initials

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Photos" />
        <p>Page under construction...</p>
      </Layout>
    )
  }
}

export default PhotosIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        initials
      }
    }
  }
`
