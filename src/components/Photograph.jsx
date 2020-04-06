import React, { Component } from 'react';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const Figure = Styled.figure`
	${ breakpoint('xl')`
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	`}

	> div {
		width: 100%;
		margin-bottom: 0;
		border-radius: 8px;
		margin-top: 2rem;

		${ breakpoint('md')`
			margin-top: 2rem;
		` }

		${ breakpoint('xl')`
			margin-top: 0rem;
		` }
	}
`;

const Figcaption = Styled.figcaption`
	font-size: .75rem;
	color: ${ props => props.theme.colors.textSecondary };
	margin-top: 5px;
`;

export default class Photograph extends Component {
    render() {
		const { image, alt, caption, download } = this.props;

        return (
			<Figure>
                <Image
                    fluid={ image }
                    alt={ alt }
                    imgStyle={ {width: `100%`} }
                />
                <Figcaption>
					{ caption }
					{ download && ' – ' }
					{ download && <a href={ download } target="_blank" rel="noopener noreferrer">Download</a> }
				</Figcaption>
            </Figure>
        )
    }
}

Photograph.propTypes = {
	image: PropTypes.object.isRequired,
	alt: PropTypes.string,
	caption: PropTypes.string
};