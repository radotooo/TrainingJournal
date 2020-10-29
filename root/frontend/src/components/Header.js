import React from 'react'
import styled from "styled-components";
import device from "./Styles/MediqQueries";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
                <Button>Today Wod</Button>
                <Button>Calculator</Button>
            </Navigation>
        </Wrapper>

    )
}
