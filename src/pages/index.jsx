import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { scale } from '../utils/typography';
import PageLayout from '../components/PageLayout';
import ProfileList from '../components/ProfileList';
import SEO from '../components/seo';

const ProfileContainer = Styled.div`
 	display: flex;
	width: 100%;
 	justify-content: space-between;
 	flex-direction: column;
	padding-bottom: 2rem;
	width: 100%;
	margin: 0 auto;

	${ breakpoint('md')`
		width: 100%;
	`};

	${ breakpoint('xl')`
		width: 100%;
	`};
`;

const ProfileHeaderContainer = Styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 2rem;
	padding-bottom: 4rem;

	${ breakpoint('md')`
		flex-direction: column;
	` }

	${ breakpoint('xl')`
		flex-direction: row;
	` }
`;

const ProfileHeader = Styled.h2`
	${ {...scale(1.2)} };
	font-family: Spectral, serif;
	margin-top: 0;
	font-style: italic;
	font-weight: 400;
	line-height: 3.5rem;

	${ breakpoint('md')`
		${ {...scale(1.25)} };
		line-height: 3.5rem;
	` }

	${ breakpoint('xl')`
		${ {...scale(1.5)} };
		line-height: 4rem;
	` }
`;

const ProfileDescription = Styled.p`
	${ {...scale(.25)} };
	font-weight: 400;
	font-family: Work Sans, sans-serif;
`;

const ProfileImageWrapper = Styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	margin-top: 2rem;

	${ breakpoint('md')`
		width: 100%;
	` }

	${ breakpoint('xl')`
		justify-content: flex-end;
		width: 40%;
	` }
`;

const ProfileImage = Styled(Image)`
	max-width: 375px;
`;

const ProfileIntroWrapper = Styled.div`
	width: 100%;

	${ breakpoint('md')`
		width: 85%;
	` }

	${ breakpoint('xl')`
		width: 85%;
	` }
`;

const Figure = Styled.figcaption`
	font-size: .75rem;
	margin-top: 5px;
	opacity: .75;
`;

const ProfileListContainer = Styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column-reverse;

	${ breakpoint('md')`
		flex-direction: column-reverse;
	` }

	${ breakpoint('xl')`
		flex-direction: row;
	` }
`;

const Underline = Styled.u`
	color: ${props => props.theme.colors.primary};
	text-decoration: none;
`;

class SiteIndex extends Component {
	render() {
		const { data, location } = this.props;
		const { author, title, email, initials, social } = data.site.siteMetadata;
		const { profile, introduction } = data.allCopyJson.edges[0].node;

    	return (
			<PageLayout
				location={ location }
				initials={ initials }
				title={title}
				email={email}
				social={social}
			>
				<SEO title='Home' />

				<ProfileContainer>
					<ProfileHeaderContainer>
						<ProfileIntroWrapper>
							<ProfileHeader>
								<strong>Daniel Gynn </strong>is a <Underline>frontend engineer</Underline> & <Underline>product designer</Underline> living in London.
							</ProfileHeader>
						</ProfileIntroWrapper>
					</ProfileHeaderContainer>

					<ProfileDescription>{introduction}</ProfileDescription>
					<Link to="/portfolio">Read More →</Link>

					<ProfileListContainer>
						<div>
							{profile.map((detail, detailIndex) => (
								<ProfileList
									key={detailIndex}
									title={detail.name}
									list={detail.list}
								/>
							))}
						</div>
						<ProfileImageWrapper>
							<ProfileImage
								fixed={data.avatar.childImageSharp.fixed}
								alt={ author }
							/>
							<Figure>Shot by Smitha Sanjeev — Arthur's Seat, Edinburgh</Figure>
						</ProfileImageWrapper>
					</ProfileListContainer>
						
				</ProfileContainer>			
			</PageLayout>
		)
 	}
}

export default SiteIndex;

export const pageQuery = graphql`
    query {
		avatar: file(absolutePath: { regex: "/self.jpeg/" }) {
			childImageSharp {
				fixed(width: 300, height: 400) {
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
`