import React, { Component } from 'react';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const Figure = Styled.figure`
	${props => props.maxWidth && (`
		max-width: 100%;
		width: 100%;
	`)};

	${props => props.maxHeight && (`
		max-height: ${props.maxHeight + 30};
		min-height: ${props.maxHeight + 30};
		height: ${props.maxHeight + 30};

		> div {
			max-height: ${props.maxHeight}px;
			min-height: ${props.maxHeight}px;
			height: ${props.maxHeight}px;
		}
	`)};

	${breakpoint('md')`
		${props => props.maxWidth && (`
			max-width: ${props.maxWidth}%;
			width: ${props.maxWidth}%;
		`)};
	`};

	${ breakpoint('xl')`
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		${props => props.maxWidth && (`
			max-width: ${props.maxWidth}%;
			width: ${props.maxWidth}%;
		`)};
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
		const { className, image, alt, caption, download, hideCaption } = this.props;

        return (
			<Figure
				maxWidth={className && className < 1 ? '49' : '100'}
				maxHeight={className && className < 1 ? 550 : null}
			>
                <Image
					className={className}
                    fluid={ image }
                    alt={ alt }
                    imgStyle={ {width: `100%`} }
                />
				{!hideCaption && (
					<Figcaption>
						{ caption }
						{ download && ' – ' }
						{ download && <a href={ download } target="_blank" rel="noopener noreferrer">Download</a> }
					</Figcaption>
				)}
            </Figure>
        )
    }
}

Photograph.defaultProps = {
	hideCaption: false
};

Photograph.propTypes = {
	image: PropTypes.object.isRequired,
	alt: PropTypes.string,
	caption: PropTypes.string,
	hideCaption: PropTypes.bool
};