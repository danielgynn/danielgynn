import React from "react"
import { graphql } from "gatsby"

import PageLayout from "../components/PageLayout"
import SEO from "../components/seo"

class PortfolioIndex extends React.Component {
  render() {
    const { data } = this.props
		const { location, initials, title, email, social } = data.site.siteMetadata;

    return (
      <PageLayout
      location={ location }
      initials={ initials }
      title={title}
      email={email}
      social={social}
    >
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
				title
				email
				author
				social {
					twitter
					instagram
					goodreads
					linkedin
				}
			}
		}
  }
`
