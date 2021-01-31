import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Box from '../components/General/Box';
import Seo from '../components/Seo';
import Heading from '../components/General/Heading';
import Text from '../components/General/Text';

const SiteIndex = ({
    data,
    location
}) => {
    const { title, email, initials, social, pages } = data.site.siteMetadata;
    const { work, currently, introduction } = data.allCopyJson.edges[0].node;
    
    return (
        <PageLayout
            location={location}
            initials={initials}
            title={title}
            email={email}
            social={social}
            pages={pages}
        >
            <Seo title='Work' />
            <Box
                width='100%'
                pb='3rem'
            >
                <Heading text='Work' />
                <Text text={introduction} />
                <Text text={currently} />
                <Box flex alignItems='flex-start' justifyContent='flex-start' flexDirection={['row', 'row', 'column']}>
                    <Text
                        margin='0 5px 0 0'
                        text={`I'm also available for freelance work. Want to work together?`}
                    />
                    <a href="mailto:danielgynn94@gmail.com">Send me an email</a>
                </Box>
                <Box style={{borderBottom: '1px solid #2e3238', paddingBottom: '2rem', marginBottom: '3rem'}}></Box>
                {work.map((job) => (
                    <Box key={job.dates} style={{marginBottom: '4rem'}}>
                        <Box flex alignItems='flex-start' justifyContent='space-between'>
                            <Box>
                                <h4 style={{margin: '0 0 1rem'}}>{job.role}</h4>
                                <a href={job.link} target="blank" rel="noreferrer noopener">{job.company}</a>
                                <Text fontStyle='italic' color='textSecondary' text={job.dates} />
                            </Box>
                            {!!job.logo && (
                                <img
                                    src={job.logo}
                                    alt={`${job.company} Logo`}
                                    style={{height: '65px', borderRadius: '8px', marginLeft: '1rem'}}
                                />
                            )}
                        </Box>
                        {!!job.content && job.content.map((c, index) => <p key={`${job.role}-${index}`}>{c}</p>)}
                        {!!job.links && (
                            <p>
                                Links:
                                {job.links.map((link, linkIndex) => (
                                    <a
                                        href={link}
                                        key={link}
                                        target="blank"
                                        rel="noreferrer noopener"
                                        style={{margin: '0 3px'}}
                                    >
                                        {link}{linkIndex + 1 < job.links.length ? ',' : ''}
                                    </a>
                                ))}
                            </p>
                        )}
                    </Box>
                ))}
            </Box>			
        </PageLayout>
    );
}

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
        allCopyJson {
			edges {
				node {
                    introduction
                    currently
                    work {
                        role
                        dates
                        company
                        link
                        content
                        links
                        logo
                    }
				}
			}
		}
	}
`;

export default SiteIndex;
