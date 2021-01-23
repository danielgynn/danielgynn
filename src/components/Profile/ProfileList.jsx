import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import { rhythm } from '../../utils/typography';

const Title = Styled.h3`
    margin-bottom: 0;
`;

const ListWrapper = Styled.div`
    margin-top: ${rhythm(.5)};
`;

const ListText = Styled.p`
    margin: 0;
    ${props => props.fontStyle && `font-style: ${props.fontStyle};`};
    ${props => props.fontWeight && `font-weight: ${props.fontWeight};`};
    ${props => props.color && `color: ${props.theme.colors[props.color]};`};
`;

class ProfileList extends Component {
    render() {
        const { title, list } = this.props;

        return (
            <div>
				<Title>{title}</Title>

                {list && list.map((item, index) => (
                    <ListWrapper key={`${item.name}${index}`}>
                        <ListText>
                            {item.link || item.linkText ? `${item.text}, ` : item.text}
                            {item.link && (
                                <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.linkText}</a>
                            )}
                            {!item.link && item.linkText && item.linkText }
                        </ListText>
                        {item.sub && (
                            <ListText fontStyle='italic' color='textSecondary'>{item.sub}</ListText>
                        )}
                    </ListWrapper>
                ))}
			</div>
        )
    }
}

ProfileList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        linkText: PropTypes.string,
        text: PropTypes.string,
        sub: PropTypes.string
    }))
};

export default ProfileList;