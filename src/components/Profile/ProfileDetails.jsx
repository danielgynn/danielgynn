import React, { Component } from 'react';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import ProfileList from './ProfileList';
import Figure from '../General/Figure';

const ProfileImageWrapper = Styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	margin-top: 2rem;

	${ breakpoint('md')`
		width: 100%;
	` }

	${ breakpoint('xl')`
		justify-content: flex-end;
		width: 40%;
	` }
`;

const ProfileImage = Styled(Image)`
	max-width: 375px;
`;

const ProfileListContainer = Styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column-reverse;

	${ breakpoint('md')`
		flex-direction: column-reverse;
	` }

	${ breakpoint('xl')`
		flex-direction: row;
	` }
`;

class ProfileDetails extends Component {
    render() {
        const { profile, avatar } = this.props;

        return (
            <ProfileListContainer>
                <div>
                    {profile.map((detail, detailIndex) => (
                        <ProfileList
                            key={detailIndex}
                            title={detail.name}
                            list={detail.list}
                        />
                    ))}
                </div>
                <ProfileImageWrapper>
                    <ProfileImage
                        fixed={avatar.image.childImageSharp.fixed}
                        alt={avatar.alt}
                    />
                    <Figure text={avatar.figure} />
                </ProfileImageWrapper>
            </ProfileListContainer>
        )
    }
}

ProfileDetails.propTypes = {
    profile: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        list: PropTypes.array
    })),
    avatar: PropTypes.shape({
        image: PropTypes.object,
        alt: PropTypes.string,
        figure: PropTypes.string
    })
};

export default ProfileDetails;