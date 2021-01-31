import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Box from '../components/General/Box';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileDetails from '../components/Profile/ProfileDetails';
import Seo from '../components/Seo';

const SiteIndex = ({
    data,
    location
}) => {
    const { author, title, email, initials, social, pages } = data.site.siteMetadata;
    const { profile, introduction } = data.allCopyJson.edges[0].node;

    return (
        <PageLayout
            location={location}
            initials={initials}
            title={title}
            email={email}
            social={social}
            pages={pages}
        >
            <Seo title='Home' />
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
                <Box style={{borderBottom: '1px solid #2e3238', paddingBottom: '2rem', margin: '3rem 0'}}></Box>
                <Box>
                    <h3 style={{marginBottom: '1rem'}}>About this Website</h3>
                    <p>All content on this website has been written by Daniel Gynn. This website was built using <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer no opener">Gatsby</a> and deployed with <a href="https://www.netlify.com" target="_blank" rel="noreferrer no opener">Netlify</a>.</p>
                </Box>
            </Box>			
        </PageLayout>
    );
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
                pages {
                    title
                    link
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
