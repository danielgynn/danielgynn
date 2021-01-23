import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

import { scale } from '../../utils/typography';

const ProfileHeaderContainer = Styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 2rem;
	padding-bottom: 4rem;

	${ breakpoint('md')`
		flex-direction: column;
	` }

	${ breakpoint('xl')`
		flex-direction: row;
	` }
`;

const ProfileHeading = Styled.h2`
	${ {...scale(1.2)} };
	font-family: Spectral, serif;
	margin-top: 0;
	font-style: italic;
	font-weight: 400;
	line-height: 3.5rem;

	${ breakpoint('md')`
		${ {...scale(1.25)} };
		line-height: 3.5rem;
	` }

	${ breakpoint('xl')`
		${ {...scale(1.5)} };
		line-height: 4rem;
	` }
`;

const ProfileDescription = Styled.p`
	${ {...scale(.25)} };
	font-weight: 400;
	font-family: Work Sans, sans-serif;
`;

const ProfileIntroWrapper = Styled.div`
	width: 100%;

	${ breakpoint('md')`
		width: 85%;
	` }

	${ breakpoint('xl')`
		width: 85%;
	` }
`;

const Underline = Styled.u`
	color: ${props => props.theme.colors.primary};
	text-decoration: none;
`;

class ProfileHeader extends Component {
    render() {
        const { introduction } = this.props;

        return (
            <Fragment>
                <ProfileHeaderContainer>
                    <ProfileIntroWrapper>
                        <ProfileHeading>
                            <strong>Daniel Gynn </strong>is a <Underline>frontend engineer</Underline> & <Underline>product designer</Underline> living in London.
                        </ProfileHeading>
                    </ProfileIntroWrapper>
                </ProfileHeaderContainer>

                <ProfileDescription>{introduction}</ProfileDescription>
                <Link to='/work/'>Read More →</Link>
            </Fragment>
        )
    }
}

ProfileHeader.propTypes = {
    introduction: PropTypes.string
};

export default ProfileHeader;