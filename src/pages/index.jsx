import React, { Component } from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Box from '../components/General/Box';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileDetails from '../components/Profile/ProfileDetails';
import SEO from '../components/seo';

class SiteIndex extends Component {
	render() {
		const { data, location } = this.props;
		const { author, title, email, initials, social } = data.site.siteMetadata;
        const { profile, introduction } = data.allCopyJson.edges[0].node;
        
    	return (
			<PageLayout
				location={location}
				initials={initials}
				title={title}
				email={email}
				social={social}
			>
				<SEO title='Home' />
				<Box
					width='100%'
					pb='3rem'
				>
					<ProfileHeader
						introduction={introduction}
					/>
					<ProfileDetails
						profile={profile}
						avatar={{
							image: data.avatar,
							alt: author
						}}
					/>
				</Box>			
			</PageLayout>
		)
 	}
}

export const pageQuery = graphql`
	query {
		avatar: file(absolutePath: { regex: "/self.jpg/" }) {
			childImageSharp {
				fixed(width: 300, height: 400, quality: 100) {
					...GatsbyImageSharpFixed
				}
			}
		}
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
		allCopyJson {
			edges {
				node {
					introduction
					profile {
						name
						list {
							text
							sub
							link
							linkText
						}
					}
				}
			}
		}
	}
`;

export default SiteIndex;
