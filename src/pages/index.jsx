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
