import React, { Component } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Styled from 'styled-components';
import InstaFeed from 'instafeed.js';
import breakpoint from 'styled-components-breakpoint';

import { rhythm, scale } from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";

const instaFeed = new InstaFeed({
	accessToken: '244718663.1677ed0.007e2acb0e424789a504618cee9f4169',
	get: 'user',
	userId: '244718663',
	sortBy: 'most-recent',
	limit: '6',
	resolution: 'standard_resolution'
});

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

const ProfileDescription = Styled.div`
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
	componentWillMount() {
		instaFeed.run();
	}

	render() {
		const { data, location } = this.props;
		const { author, initials, mainDescription } = data.site.siteMetadata;

    	return (
		<Layout location={ location } title={ initials } pageWidth={ 36 }>
			<SEO title="Daniel Gynn" />

			<ProfileContainer>
				<ProfileDescription className="profile-description">
					<h2 style={
					{
						...scale(1),
						fontFamily: `Spectral, serif`,
						marginTop: '0',
						fontStyle: 'italic',
						fontWeight: '400',
						lineHeight: '3rem'
					}}>
					<strong>Daniel Gynn – </strong>Frontend Engineer & Product Designer based in London, UK.
					</h2>
					<p style={ {...scale(.25), fontWeight: '400', fontFamily: 'Work Sans, sans-serif'} }>
					{ mainDescription }
					</p>
				</ProfileDescription>

				<ProfileImageWrapper>
					<ProfileImage>
						<Image
							fixed={data.avatar.childImageSharp.fixed}
							alt={author}
							imgStyle={{
								width: `100%`,
							}}
						/>
						<Figure>Shot by Smitha Sanjeev at Chiswick Gardens</Figure>
					</ProfileImage>	
				</ProfileImageWrapper>
			</ProfileContainer>

			<div>
			<h3 style={ {marginBottom: 0} }>Education</h3>
			<div style={ {marginTop: `${rhythm(.5)}`} }>
				<p style={ {margin: '0'} }>Computer Science with a Year in Industry, <a href="https://www.kent.ac.uk/">University of Kent</a></p>
				<p style={ {margin: '0', fontStyle: 'italic'} }>2013–2017</p>
			</div>
			</div>

			<div>
			<h3 style={ {marginBottom: 0} }>Career</h3>
			<div style={ {marginTop: `${rhythm(.5)}`} }>
				<p style={ {margin: '0'} }>Lead Frontend Engineer, <a href="https://filament.ai">Filament AI</a></p>
				<p style={ {margin: '0', fontStyle: 'italic'} }>2019—Present</p>
			</div>

			<div style={ {marginTop: `${rhythm(.5)}`} }>
				<p style={ {margin: '0'} }>Frontend Engineer, <a href="https://filament.ai">Filament AI</a></p>
				<p style={ {margin: '0', fontStyle: 'italic'} }>2017—2019</p>
			</div>

			<div style={ {marginTop: `${rhythm(.5)}`} }>
				<p style={ {margin: '0'} }>Frontend Developer, <a href="https://repositive.io">Repositive</a></p>
				<p style={ {margin: '0', fontStyle: 'italic'} }>2016—2017</p>
			</div>

			<div style={ {marginTop: `${rhythm(.5)}`} }>
				<p style={ {margin: '0'} }>Junior Web Developer, <a href="https://repositive.io">Repositive</a></p>
				<p style={ {margin: '0', fontStyle: 'italic'} }>2015—2016</p>
			</div>
			</div>

			<div>
				<h3 style={ {marginBottom: 0} }>Speaking</h3>
				<div style={ {marginTop: `${rhythm(.5)}`} }>
					<p style={ {margin: '0'} }>Ember London, <a href="https://vimeo.com/178828815" target="_blank">A Beginner's Journey into Ember.js</a></p>
					<p style={ {margin: '0', fontStyle: 'italic'} }>11th August, 2018</p>
				</div>
				<div style={ {marginTop: `${rhythm(.5)}`} }>
					<p style={ {margin: '0'} }>CambridgeJS, <a href="http://danielgynn-cambjs.surge.sh" target="_blank">Building Ambitious Web Applications with Ember.js</a></p>
					<p style={ {margin: '0', fontStyle: 'italic'} }>11th July, 2018</p>
				</div>
			</div>

			<div>
				<h3 style={ {marginBottom: 0} }>Connect</h3>
				<ul style={ {marginTop: `${rhythm(.5)}`} }>
					<li style={ {margin: '0 0 0 2rem'} }><a href="https://twitter.com/danielgynn" target="_blank">Twitter</a></li>
				</ul>
			</div>

			<div>
			<h3 style={ {marginBottom: 0} }>Recent Photos</h3>
			<div style={ {marginTop: `${rhythm(1)}`} } id="instafeed" className='instafeed'></div>
			<p>View more on <a href="https://instagram.com/danielgynn" target="_blank" rel="noopener noreferrer">Instagram →</a></p>
			</div>
		</Layout>
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