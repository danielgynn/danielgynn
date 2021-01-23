import React from 'react';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const Wrapper = Styled.div`
    ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[2] : props.width};`};
    ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[2] : props.height};`};
    ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[2] : props.margin};`};
    ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[2] : props.pb};`};

    ${breakpoint('md')`
        ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[1] : props.width};`};
        ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[1] : props.height};`};
        ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[1] : props.margin};`};
        ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[1] : props.pb};`};
	`};

	${ breakpoint('xl')`
        ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[0] : props.width};`};
        ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[0] : props.height};`};
        ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[0] : props.margin};`};
        ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[0] : props.pb};`};
	`};
`;

const Box = ({
    children,
    ...rest
}) => (
    <Wrapper {...rest}>
        {children}
    </Wrapper>
);

Box.propTypes = {
    children: PropTypes.node
};

export default Box;