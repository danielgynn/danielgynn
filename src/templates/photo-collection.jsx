import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import { scale } from '../utils/typography';
import PageLayout from "../components/PageLayout";
import SEO from '../components/seo';
import Photograph from '../components/Photograph';
import styled from "styled-components";

const PhotoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
`;

export const query = graphql`
    query ($slug: String!) {
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
        collectionsJson(slug: {eq: $slug}) {
            name
            date
            slug
            next
            description
            featured {
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
            sub {
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
`;

class CollectionTemplate extends Component {
  render() {
    const { data } = this.props;
    const { location, initials, title, email, social } = data.site.siteMetadata;
    const collection = data.collectionsJson;

    return (
        <PageLayout
            location={ location }
            initials={ initials }
            title={title}
            email={email}
            social={social}
        >
            <SEO title='Photography' />

            <div style={{marginBottom: '2rem'}}>
                <h2 style={
                    {
                        ...scale(1),
                        fontFamily: `Spectral, serif`,
                        marginTop: '0',
                        fontWeight: '900',
                        lineHeight: '2rem'
                    }}>
                    {collection.name}
                </h2>
                {collection.description && (
                    <p>{collection.description}</p>
                )}
                <p>{collection.photos.length} photos {collection.date && `— Taken ${collection.date}`}</p>
                <Link to="/photography">← Back to Photography</Link>
            </div>  

            <PhotoContainer>
                {collection.photos.map((photo, photoIndex) => (
                    <Photograph
                        key={photoIndex}
                        {...photo}
                        className={photo.src.childImageSharp.fluid.aspectRatio}
                        image={photo.src.childImageSharp.fluid}
                    />
                ))}
            </PhotoContainer>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Link to="/photography/">← Back to Photography</Link>
                {collection.next && (
                    <Link to={`/photography/${collection.next}/`}>Next Collection →</Link>
                )}
            </div>
        </PageLayout>
    )
  }
}

export default CollectionTemplate;