import React from 'react';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const Wrapper = Styled.div`
    ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[2] : props.width};`};
    ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[2] : props.height};`};
    ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[2] : props.margin};`};
    ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[2] : props.pb};`};

    ${props => props.flex && `
        display: flex;
        ${props.alignItems && `align-items: ${Array.isArray(props.alignItems) ? props.alignItems[2] : props.alignItems};`};
        ${props.justifyContent && `justify-content: ${Array.isArray(props.justifyContent) ? props.justifyContent[2] : props.justifyContent};`};
        ${props.flexDirection && `flex-direction: ${Array.isArray(props.flexDirection) ? props.flexDirection[2] : props.flexDirection};`};
    `};

    ${breakpoint('md')`
        ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[1] : props.width};`};
        ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[1] : props.height};`};
        ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[1] : props.margin};`};
        ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[1] : props.pb};`};

        ${props => props.flex && `
            display: flex;
            ${props.alignItems && `align-items: ${Array.isArray(props.alignItems) ? props.alignItems[1] : props.alignItems};`};
            ${props.justifyContent && `justify-content: ${Array.isArray(props.justifyContent) ? props.justifyContent[1] : props.justifyContent};`};
            ${props.flexDirection && `flex-direction: ${Array.isArray(props.flexDirection) ? props.flexDirection[1] : props.flexDirection};`};
        `};
	`};

	${ breakpoint('xl')`
        ${props => props.width && `width: ${Array.isArray(props.width) ? props.width[0] : props.width};`};
        ${props => props.height && `height: ${Array.isArray(props.height) ? props.height[0] : props.height};`};
        ${props => props.margin && `margin: ${Array.isArray(props.margin) ? props.margin[0] : props.margin};`};
        ${props => props.pb && `padding-bottom: ${Array.isArray(props.pb) ? props.pb[0] : props.pb};`};

        ${props => props.flex && `
            display: flex;
            ${props.alignItems && `align-items: ${Array.isArray(props.alignItems) ? props.alignItems[0] : props.alignItems};`};
            ${props.justifyContent && `justify-content: ${Array.isArray(props.justifyContent) ? props.justifyContent[0] : props.justifyContent};`};
            ${props.flexDirection && `flex-direction: ${Array.isArray(props.flexDirection) ? props.flexDirection[0] : props.flexDirection};`};
        `};
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