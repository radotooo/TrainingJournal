import React from 'react'
import styled from "styled-components";
import device from "./Styles/MediqQueries";
import StyledLink from './Styles/StyledLink';

const Wrapper = styled.div`
display:flex;
justify-content:center;
width:100%;
height:50px;
background-color:#1976D2;
box-shadow: 0px 4px 13px -3px rgba(0,0,0,0.83);
color:white;
`;

const Navigation = styled.div`
display:flex;
align-items:center;
width:70%;
margin-left:1em;
@media ${device.laptop}{
    width:100%;
}
`;

const Button = styled.a`
padding:1em;
cursor: pointer;
`;

export default function Header() {
    return (
        <Wrapper>
            <Navigation>
                <StyledLink to="/">
                    Today Wod
                </StyledLink>
                <StyledLink to="/calculator">
                    <Button>Calculator</Button>
                </StyledLink>
            </Navigation>
        </Wrapper>
    )
}
