import React, { Component } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const CollectionWrapper = Styled(Link)`
    width: 100%;
    display: block;
    margin-bottom: 1rem;

	${ breakpoint('md')`
	    width: 100%;
    ` }

    ${ breakpoint('xl')`
	    width: 100%;
    ` }

    p {
        color: white;
    }

    &:hover {
        opacity: .85;
        text-decoration: none;
    }
`;

const CollectionPreviewWrapper = Styled.div`
    position: relative;
    margin-bottom: 8px;
    padding-bottom: 70%;
`;

const CollectionPreview = Styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 6px;
    perspective: 1px;
    overflow: hidden;
    cursor: pointer;
    transition: all .1s ease-in-out;
`;

const CollectionFeatured = Styled.div`
width: 70%;
background: ${props => props.theme.colors.secondary};
position: relative;
`;

const CollectionSubFeatured = Styled.div`
display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 2px;
`;

const CollectionSubFeaturedItem = Styled.div`
    position: relative;
    flex-grow: 1;
    background: ${props => props.theme.colors.secondary};

    &:first-child {
        margin-bottom: 5px;
    }
`;

const CollectionFeaturedImage = Styled(Image)`
position: absolute;
    width: 100%;
    height: 100%;
    left: 0;

    img {
        object-fit: cover !important;
    }

    > div {
        border-radius: 0;
    }
`;

const CollectionDetails = Styled.div``;

const CollectionName = Styled.p`
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0;
`;

class Collection extends Component {
    render() {
        const { name, featured, sub, photos, date, slug } = this.props;
        
        return (
			<CollectionWrapper to={`/photography/${slug}`}>
                <div>
                    <CollectionPreviewWrapper>
                        <CollectionPreview>
                            <CollectionFeatured>
                                <CollectionFeaturedImage
                                    {...featured}
                                    fluid={featured.src.childImageSharp.fluid}
                                    hideCaption
                                />
                            </CollectionFeatured>
                            <CollectionSubFeatured>
                                {sub.map((subImage, subIndex) => (
                                    <CollectionSubFeaturedItem
                                        key={subIndex}
                                    >
                                        {subImage.src && (
                                            <CollectionFeaturedImage
                                                {...subImage}
                                                fluid={subImage.src.childImageSharp.fluid}
                                                hideCaption
                                            />
                                        )}  
                                    </CollectionSubFeaturedItem>
                                ))}
                            </CollectionSubFeatured>
                        </CollectionPreview>
                    </CollectionPreviewWrapper>
                    <CollectionDetails>
                        <CollectionName>{name}</CollectionName>
                        <p>{photos.length} photos — Taken {date}</p>
                    </CollectionDetails>
                </div>
            </CollectionWrapper>
        )
    }
}

Collection.propTypes = {
	name: PropTypes.string
};

export default Collection;