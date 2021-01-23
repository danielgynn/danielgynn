import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const NavTitle = styled.h3`
	font-family: Spectral, serif;
	font-size: 2.75rem;
	font-style: italic;
	color: ${ props => props.theme.colors.text };
	display: inline;
	font-weight: 900;
	transition: ${ props => props.theme.transitions.default };

	&:hover {
		color: ${ props => props.theme.colors.primary } !important;
	}
`;

const StyledNavbar = styled.nav`
	margin-bottom: 4.5rem;
	padding: 0rem 0rem 3rem;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;

	${ breakpoint('md')`
		padding: 3rem 0rem;
		align-items: center;
		flex-direction: row;
	` }

	${ breakpoint('xl')`
		padding: 3rem 0rem;
		align-items: center;
		flex-direction: row;
	` }
`;

const NavList = styled.ul`
    list-style: none;
    float: right;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const NavListItem = styled.li`
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0;
`;

const StyledLink = styled(Link)`
	color: ${ props => props.theme.colors.text } !important;
    transition: ${ props => props.theme.transitions.default };
    border: none;
    

	&:hover {
        color: ${ props => props.theme.colors.primary } !important;
        background: none;
        text-decoration: underline;
	}
`;

const Navigation = ({
    title,
    pages = []
}) => (
	<StyledNavbar>
		<StyledLink to='/' >
			<NavTitle>{ title }</NavTitle>
		</StyledLink>
		<NavList>
            {pages.map(page => (
                <NavListItem key={page.link}>
                    <StyledLink
                        activeStyle={{fontWeight: '700'}}
                        to={page.link}
                    >
                        {page.title}
                    </StyledLink>
                </NavListItem>
            ))}
		</NavList>
	</StyledNavbar>
);

export default Navigation;