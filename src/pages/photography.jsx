import React from 'react';
import { graphql } from 'gatsby';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { scale } from '../utils/typography';
import PageLayout from '../components/PageLayout';
import SEO from '../components/seo';
import Photograph from '../components/Photograph';
import Collection from '../components/Photography/Collection';

const HeaderWrapper = Styled.div`
	width: 100%;

	${ breakpoint('md')`
		width: 75%;
	` }

	${ breakpoint('xl')`
		width: 65%;
	` }
`;

const CollectionsGrid = Styled.div`
	display: grid;
	grid-gap: 48px 24px;
	grid-template-columns: repeat(1, minmax(0,1fr));
	
	${ breakpoint('md')`
		grid-template-columns: repeat(2,minmax(0,1fr));
	` }

	${ breakpoint('xl')`
		grid-template-columns: repeat(2,minmax(0,1fr));
	` }
`;

class PhotographyIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { location, initials, title, email, social } = data.site.siteMetadata;
		const photography = data.allPhotographyJson.edges;
		const collections = data.allCollectionsJson.edges;

		const {photos} = photography.find(n => n.node.photos).node;

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

				<h3 style={
					{
						...scale(.75),
						fontFamily: `Work Sans, sans-serif`,
						marginTop: '2rem',
						fontWeight: '700',
						lineHeight: '2rem'
					}}>
					Collections
				</h3>

				<CollectionsGrid>
					{collections.map((collection, collectionIndex) => (
						<Collection
							key={`${collection.node.name}${collectionIndex}`}
							{...collection.node}
						/>
					))}
				</CollectionsGrid>

				<h3 style={
					{
						...scale(.75),
						fontFamily: `Work Sans, sans-serif`,
						marginTop: '2rem',
						fontWeight: '700',
						lineHeight: '2rem'
					}}>
					Favourites
				</h3>
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
								fluid(maxWidth: 1080, quality: 100) {
									aspectRatio
									...GatsbyImageSharpFluid_withWebp
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
		allCollectionsJson {
			edges {
				node {
					name
					date
					slug
					featured {
						src {
							childImageSharp {
								fluid(maxWidth: 1080, maxHeight: 750, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
						caption
						download
						alt
					}
					sub {
						src {
							childImageSharp {
								fluid(maxWidth: 1080, maxHeight: 750, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
						caption
						download
						alt
					}
					photos {
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
