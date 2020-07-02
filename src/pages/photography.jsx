import React from 'react';
import { graphql } from 'gatsby';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { scale } from '../utils/typography';
import PageLayout from '../components/PageLayout';
import SEO from '../components/seo';
import Photograph from '../components/Photograph';

const HeaderWrapper = Styled.div`
	width: 100%;

	${ breakpoint('md')`
		width: 75%;
	` }

	${ breakpoint('xl')`
		width: 65%;
	` }
`;

class PhotographyIndex extends React.Component {
	render() {
		const { data } = this.props
		const { location, initials, title, email, social } = data.site.siteMetadata;
		const { photos } = data.allPhotographyJson.edges[0].node;

		return (
			<PageLayout
				location={ location }
				initials={ initials }
				title={title}
				email={email}
				social={social}
			>
				<SEO title='Photography' />

				<HeaderWrapper style={ {marginBottom: '3rem'}}>
					<h2 style={
						{
							...scale(1),
							fontFamily: `Spectral, serif`,
							marginTop: '0',
							fontWeight: '900',
							lineHeight: '2rem'
						}}>
						Photography
					</h2>
					<p style={ { fontWeight: '400', fontFamily: 'Work Sans, sans-serif'} } >
						Below is an assortment of my favourite shots. You can find more of my photography on <a href='https://unsplash.com/@danielgynn' target='_blank' rel='noopener noreferrer'>Unsplash</a> and <a href='https://instagram.com/danielgynn' target='_blank' rel='noopener noreferrer'>Instagram</a>.
					</p>
				</HeaderWrapper>

				{photos.map((photo, photoIndex) => (
					<Photograph
						key={photoIndex}
						{...photo}
						image={photo.src.childImageSharp.fluid}
					/>
				))}
			</PageLayout>
		)
	}
}

export default PhotographyIndex;

export const pageQuery = graphql`
	query {
		allPhotographyJson {
			edges {
				node {
					photos {
						src {
							childImageSharp {
								fluid(maxWidth: 1080, maxHeight: 750) {
									...GatsbyImageSharpFluid
							  	}
							}
						}
						caption
						download
						alt
					}
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
	}
`
