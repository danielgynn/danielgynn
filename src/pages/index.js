import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { scale } from '../utils/typography';
import PageLayout from '../components/PageLayout';
import ProfileList from '../components/ProfileList';
import SEO from '../components/seo';
import InstagramFeed from '../components/InstagramFeed';

const ProfileContainer = Styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 5rem;

	${ breakpoint('md')`
		flex-direction: column;
	` }

	${ breakpoint('xl')`
		flex-direction: row;
	` }
`;

const ProfileHeader = Styled.h2`
	${ {...scale(1)} };
	font-family: Spectral, serif;
	margin-top: 0;
	font-style: italic;
	font-weight: 400;
	line-height: 3rem;
`;

const ProfileDescription = Styled.p`
	${ {...scale(.25)} };
	font-weight: 400;
	font-family: Work Sans, sans-serif;
`;

const ProfileImageWrapper = Styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;

	${ breakpoint('md')`
		width: 100%;
	` }

	${ breakpoint('xl')`
		justify-content: flex-end;
		width: 40%;
	` }
`;

const ProfileImage = Styled.figure`
	${ breakpoint('xl')`
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	`}

	> div {
		margin-bottom: 0;
		height: 250px !important;
		border-radius: 8px;
		margin-top: 2rem;
		width: 275px !important;

		${ breakpoint('md')`
			height: 275px !important;
			width: 250px !important;
			margin-top: 2rem;
		` }

		${ breakpoint('xl')`
			width: 100% !important;
			height: 325px !important;
			margin-top: 0rem;
			display: flex;
		` }
	}
`;

const ProfileIntroWrapper = Styled.div`
	width: 100%;

	${ breakpoint('md')`
		width: 80%;
	` }

	${ breakpoint('xl')`
		width: 60%;
	` }
`;

const Figure = Styled.figure`
	font-size: .75rem;
	color: #555d66;
	margin-top: 5px;
`;

class SiteIndex extends Component {
	render() {
		const { data, location } = this.props;
		const { author, initials, mainDescription } = data.site.siteMetadata;

    	return (
			<PageLayout location={ location } title={ initials } pageWidth={ 36 }>
				<SEO title='Daniel Gynn' />

				<ProfileContainer>
					<ProfileIntroWrapper>
						<ProfileHeader>
							<strong>Daniel Gynn – </strong>Frontend Engineer & Product Designer based in London, UK.
						</ProfileHeader>
						<ProfileDescription>{ mainDescription }</ProfileDescription>
					</ProfileIntroWrapper>

					<ProfileImageWrapper>
						<ProfileImage>
							<Image
								fixed={data.avatar.childImageSharp.fixed}
								alt={ author }
								imgStyle={ {width: `100%`} }
							/>
							<Figure>Shot by Smitha Sanjeev at Chiswick Gardens</Figure>
						</ProfileImage>	
					</ProfileImageWrapper>
				</ProfileContainer>

				<ProfileList
					title={ 'Education' }
					list={ [
						{text: `Computer Science with a Year in Industry`, sub: `2013–2017`, link: `https://www.kent.ac.uk/`, linkText: `University of Kent`}
					] }
				/>

				<ProfileList
					title={ 'Career' }
					list={ [
						{text: `Lead Frontend Engineer`, sub: `2019—Present`, link: `https://filament.ai`, linkText: `Filament AI`},
						{text: `Frontend Engineer`, sub: `2019`, link: `https://filament.ai`, linkText: `Filament AI`},
						{text: `Frontend Developer`, sub: `2016-2017`, link: `https://repositive.io`, linkText: `Repositive`},
						{text: `Junior Web Developer`, sub: `2015-2016`, link: `https://repositive.io`, linkText: `Repositive`}
					] }
				/>

				<ProfileList
					title={ 'Speaking' }
					list={ [
						{text: `Ember London`, sub: `11th August, 2016`, link: `https://vimeo.com/178828815`, linkText: `A Beginner's Journey into Ember.js`},
						{text: `CambridgeJS`, sub: `11th July, 2016`, link: `http://danielgynn-cambjs.surge.sh`, linkText: `Building Ambitious Web Applications with Ember.js`}
					] }
				/>

				<ProfileList
					title={ 'Connect' }
					list={ [
						{text: `Twitter`, link: `https://twitter.com/danielgynn`, linkText: `@danielgynn`},
					] }
				/>
				
				<InstagramFeed />
			</PageLayout>
		)
 	}
}

export default SiteIndex;

export const pageQuery = graphql`
    query {
		avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
			childImageSharp {
				fixed(width: 500, height: 500) {
					...GatsbyImageSharpFixed
				}
			}
		}
		site {
			siteMetadata {
				initials
				title
				author
				mainDescription
			}
		}
    }
`