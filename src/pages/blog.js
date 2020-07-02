import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import PageLayout from "../components/PageLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
		const { location, initials, title, email, social } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges

    const showBlog = false;

    return (
      <PageLayout
				location={ location }
				initials={ initials }
				title={title}
				email={email}
				social={social}
			>
        <SEO title="Blog" />
        <p>Page under construction...</p>
        { showBlog && (
          <div>
            <Bio />
            {posts.map(({ node }) => {
              const initials = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {initials}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
          </div>
        ) }
      </PageLayout>
    )
  }
}

export default BlogIndex

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
