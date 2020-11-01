import React, { useState } from 'react'
import styled from "styled-components";
import device from "./Styles/MediqQueries";
import StyledLink from './Styles/StyledLink';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import DrawerComponent from './Drawer';


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

const StyledIconButton = styled(IconButton)`
    color:white !important;
    display:none !important;
    @media ${device.mobileL}{
            display:block !important;
    }
`;

const Container = styled.div`
display:flex;
   @media ${device.mobileL}{
    display:none;
}

`;

export default function Header() {
    const [drawer, setDrawer] = useState(false)
    const handleClick = (value) => {
        setDrawer(value)
    }
    return (
        <Wrapper>
            <DrawerComponent handleClick={handleClick} drawer={drawer} setDrawer={setDrawer} />
            <Navigation>
                <StyledIconButton onClick={() => setDrawer(true)} >
                    <MenuIcon />
                </StyledIconButton>
                <Container>
                    <StyledLink hovercolor="#d2d9df" to="/">
                        Today Wod
                </StyledLink>
                    <StyledLink hovercolor="#d2d9df" to="/calculator">
                        Calculator
                </StyledLink>
                    <StyledLink hovercolor="#d2d9df" to="/conversions">
                        Conversions
                </StyledLink>
                </Container>
            </Navigation>
        </Wrapper >
    )
}
