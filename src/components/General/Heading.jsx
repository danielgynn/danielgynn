import React from 'react';

import { scale } from '../../utils/typography';

const Heading = ({
    text,
    style
}) => (
    <h2 style={
        {
            ...scale(1),
            fontFamily: `Spectral, serif`,
            marginTop: '0',
            fontWeight: '900',
            lineHeight: '2rem',
            ...style
        }}>
        {text}
    </h2>
);

export default Heading;