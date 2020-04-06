import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../components/PageLayout"
import SEO from "../components/seo"

class PortfolioIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.initials

    return (
      <PageLayout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <p>Page under construction...</p>
      </PageLayout>
    )
  }
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        initials
      }
    }
  }
`
