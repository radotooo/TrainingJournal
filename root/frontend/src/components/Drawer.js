import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { IconButton, List, MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from "styled-components";
import StyledLink from './Styles/StyledLink';


const StyledList = styled(List)`
width:200px;
background-color:transparent;
color:white !important;
&:focus{
    outline:none;
}
`;

const StyledIconButton = styled(IconButton)`
position:absolute;
left:75%;
color:white;
`;

const StyledDrawer = styled(Drawer)`
& .MuiPaper-root{
    background-color:#1976D2;
}
`;

export default function DrawerComponent({ drawer, setDrawer, handleClick }) {

    return (
        <>
            <StyledDrawer color="primary" open={drawer} onClose={() => handleClick(false)} >
                <StyledList onClick={() => handleClick(false)}>
                    <StyledIconButton >
                        <CloseIcon style={{ color: "white" }} />
                    </StyledIconButton>
                    <MenuItem><StyledLink to="/" >Today Wod</StyledLink></MenuItem>
                    <MenuItem><StyledLink to="/calculator" >Calculator</StyledLink></MenuItem>
                    <MenuItem><StyledLink to="conversion" >Convertions</StyledLink></MenuItem>
                </StyledList>
            </StyledDrawer>
        </>
    )
}
