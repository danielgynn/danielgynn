import React from 'react';
import styled from 'styled-components';

import Box from '../General/Box';

const Wrapper = styled(Box)`
    margin: 2px;

    &:hover {
        opacity: .75;
    }
`;

const Post = styled.img`
    object-fit: cover;
    cursor: pointer;
    transition: opacity .3s ease;
`;

const InstagramFeed = ({
    feed = []
}) => (
    <Box flex flexWrap='wrap' margin='0 0 1rem'>
        {feed.map(i => (
            <Wrapper
                key={i.id}
                onClick={() => window.open(`https://www.instagram.com/p/${i.id}`, '_blank')}
                width={['200px', '125px', '135px']}
                height={['200px', '125px', '135px']}
            >
                <Post
                    src={i.original}
                    alt={i.caption}
                    width='100%'
                    height='100%'
                />
            </Wrapper>
        ))}
    </Box>
);

export default InstagramFeed;