import React from 'react';
import { graphql, Link } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import Box from '../components/General/Box';
import Heading from '../components/General/Heading';

const PageNotFound = ({
    data
}) => {
    const {location, initials, title, email, social, pages} = data.site.siteMetadata;

    return (
        <PageLayout
            title={title}
            location={location}
            initials={initials}
            email={email}
            social={social}
            pages={pages}
        >
            <Seo title='404: Not Found' />
            <Box height='50vh'>
                <Heading text='Page Not Found' />
                <Link to='/'>← Back Home</Link>
            </Box>
        </PageLayout>
    );
};

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
                pages {
                    title
                    link
                }
			}
		}
    }
`;

export default PageNotFound;