import React from 'react';
import { graphql } from 'gatsby';
import { scale } from '../utils/typography';

import PageLayout from '../components/PageLayout';
import SEO from '../components/seo';
import Photograph from '../components/Photograph';

class PhotosIndex extends React.Component {
	render() {
		const { data } = this.props
		const { location, initials, title, email, social } = data.site.siteMetadata;

		return (
			<PageLayout
				location={ location }
				initials={ initials }
				title={title}
				email={email}
				social={social}
			>
				<SEO title='Photos' />

				<div style={ {marginBottom: '3rem'}}>
					<h2 style={
						{
							...scale(1),
							fontFamily: `Spectral, serif`,
							marginTop: '0',
							fontStyle: 'italic',
							fontWeight: '400',
							lineHeight: '3rem'
						}}>
						Photography
					</h2>
					<p style={ {...scale(.35), fontWeight: '400', fontFamily: 'Work Sans, sans-serif', width: '60%'} } >
						Below is an assortment of my favourite shots. You can find more of my photography on <a href='https://unsplash.com/@danielgynn' target='_blank' rel='noopener noreferrer'>Unsplash</a> and <a href='https://instagram.com/danielgynn' target='_blank' rel='noopener noreferrer'>Instagram</a>.
					</p>
				</div>

				<Photograph
					caption={ 'Rome, italy' }
					image={ data.imageOne.childImageSharp.fluid }
					alt={ 'Bicycle Thieves – Rome, Italy' }
					download={ 'https://unsplash.com/photos/CUh69eo3MyU' }
				/>

				<Photograph
					caption={ 'Munnar, Kerela, India' }
					image={ data.imageTwo.childImageSharp.fluid }
					alt={ 'Munnar, Kerela, India' }
					download={ 'https://unsplash.com/photos/x1mGwkffsCU' }
				/>

				<Photograph
					caption={ 'Munnar, Kerela, India' }
					image={ data.imageThree.childImageSharp.fluid }
					alt={ 'Munnar, Kerela, India' }
					download={ 'https://unsplash.com/photos/FR1PHbnkupg' }
				/>

				<Photograph
					caption={ 'Dubare Elephant Camp, Karnataka, India' }
					image={ data.imageFour.childImageSharp.fluid }
					alt={ 'Dubare Elephant Camp, Karnataka, India' }
					download={ 'https://unsplash.com/photos/ZgXY1ZgoQog' }
				/>

				<Photograph
					caption={ 'Munnar, Kerela, India' }
					image={ data.imageFive.childImageSharp.fluid }
					alt={ 'Munnar, Kerela, India' }
					download={ 'https://unsplash.com/photos/RWwwCvZfWX0' }
				/>
				<Photograph
					caption={ 'Edinburgh, Scotland, UK' }
					image={ data.imageSix.childImageSharp.fluid }
					alt={ 'Edinburgh, Scotland' }
					download={ 'https://unsplash.com/photos/k9EZzRow1cA' }
				/>
			</PageLayout>
		)
	}
}

export default PhotosIndex;

export const pageQuery = graphql`
	query {
		imageOne: file(absolutePath: { regex: "/photography/bicycle_thieves.jpeg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
				}
			}
		}
		imageTwo: file(absolutePath: { regex: "/photography/roads.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
				}
			}
		}
		imageThree: file(absolutePath: { regex: "/photography/sunset.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
				}
			}
		}
		imageFour: file(absolutePath: { regex: "/photography/elephant.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
				}
			}
		}
		imageFive: file(absolutePath: { regex: "/photography/kerela.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
				}
			}
		}
		imageSix: file(absolutePath: { regex: "/photography/edinburgh.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1080, maxHeight: 750) {
				  	...GatsbyImageSharpFluid
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
