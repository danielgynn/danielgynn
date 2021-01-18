import React, { Component } from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Box from '../components/General/Box';
import SEO from '../components/seo';
import Activity from '../components/Running/Activity';

class Running extends Component {
	render() {
		const { data, location } = this.props;
        const { title, email, initials, social } = data.site.siteMetadata;
        
        const activities = data.allStravaActivity.edges;
        const yearTotal = ((data.yearlyDistance.nodes.reduce((a, b) => a + b.activity.distance, 1) / 1000).toFixed(2));
        
    	return (
			<PageLayout
				location={location}
				initials={initials}
				title={title}
				email={email}
				social={social}
			>
				<SEO title='Running' />
				<Box
					width='100%'
					pb='3rem'
				>
                    <h2>Running</h2>
                    <div>
                        <p>Total Distance 2021</p>
                        <p>{yearTotal}KM</p>
                    </div>

                    {activities.map(a => (
                        <Activity
                            key={a.node.id}
                            activity={a.node.activity}
                        />
                    ))}
				</Box>			
			</PageLayout>
		)
 	}
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
			}
        }
        longestRun: allStravaActivity(
            filter: {
              activity: {
                type: {eq: "Run"}
                map: {summary_polyline: {ne: null}}
                visibility: {eq: "everyone"}
              }
            }
            sort: {fields: [activity___distance], order: DESC}
            limit: 1
          ) {
            nodes {
                ...ActivityFragment
            }
        }
        yearlyDistance: allStravaActivity(filter: {activity: {type: {eq: "Run"}, map: {summary_polyline: {ne: null}}, visibility: {eq: "everyone"}, start_date: {gt: "2021-01-01T00:00:00Z", lt:"2022-01-01T00:00:00Z"}}}) {
            nodes {
              id
              activity {
                distance
                start_date
              }
            }
        }
        allStravaActivity(
            filter: {
                activity: {
                    type: {in: ["Run"]},
                    visibility: {eq: "everyone"}
                }
            },
            sort: {
                fields: [activity___start_date],
                order: DESC
            },
            limit: 10
        ) {
            edges {
                node {
                    ...ActivityFragment
                }
            }
        }
	}
`;

export default Running;
