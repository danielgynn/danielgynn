import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.footer`
	font-size: .9rem;
	margin-top: 3rem;
	background: ${props => props.theme.colors.secondary};
	padding-top: 3rem;
	padding-bottom: 3rem;

	> div {
		max-width: ${props => props.theme.sizes.container.mobile};
		margin: 0 auto;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
		padding: 0 1.5rem;

		${ breakpoint('md')`
			max-width: ${props => props.theme.sizes.container.tablet};
			padding: 0 2rem;
			align-items: flex-end;
			flex-direction: row;
		` }

		${ breakpoint('xl')`
			max-width: ${props => props.theme.sizes.container.desktop};
			padding: 0 2rem;
			align-items: flex-end;
			flex-direction: row;
		` }
	}
`;

const FooterText = styled.p`
	margin: 0;
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	margin-left: 2rem;

	&:first-child {
		margin-left: 0;
	}
`;

const FooterLinksWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
`;

const Footer = ({
    title,
    email,
    social,
    pages = []
}) => (
    <Wrapper>
        <div>
            <div>
                <FooterText><strong>{title}</strong> © {new Date().getFullYear()}</FooterText>
                <FooterText>{email}</FooterText>
            </div>

            <FooterLinksWrapper>
                <FooterLinks>
                    {pages.map(page => (
                        <Link
                            key={page.link}
                            to={page.link}
                        >
                            {page.title}
                        </Link>
                    ))}
                </FooterLinks>
                {!!(social) && (
                    <FooterLinks>
                        <a href={social.twitter} target='_blank' rel='noopener noreferrer'>Twitter</a>
                        <a href={social.instagram} target='_blank' rel='noopener noreferrer'>Instagram</a>
                        <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                        <a href={social.goodreads} target='_blank' rel='noopener noreferrer'>Goodreads</a>
                    </FooterLinks>
                )}
            </FooterLinksWrapper>
        </div>
    </Wrapper>
);

export default Footer;