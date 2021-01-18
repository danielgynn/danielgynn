import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const FigureText = Styled.figcaption`
	font-size: .75rem;
	margin-top: 5px;
	opacity: .75;
`;

class Figure extends Component {
    render() {
        const { text } = this.props;

        return (
            <FigureText>
                {text}
            </FigureText>
        )
    }
}

Figure.propTypes = {
    text: PropTypes.string
};

export default Figure;