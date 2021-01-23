import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
    ${props => props.fontStyle && `font-style: ${props.fontStyle};`};
    ${props => props.fontWeight && `font-weight: ${props.fontWeight};`};
    ${props => props.color && `color: ${props.theme.colors[props.color]};`};
    ${props => props.margin && `margin: ${props.margin};`};
`;

const Text = ({
    text = '',
    ...rest
}) => (
    <StyledText
        {...rest}
        dangerouslySetInnerHTML={{__html: text}}
    />
);

export default Text;