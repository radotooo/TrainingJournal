import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`
width:100%;
height:50px;
background-color:#1976D2;
box-shadow: 0px 4px 13px -3px rgba(0,0,0,0.83);
color:white;
`;

const Navigation = styled.div`
display:flex;
margin-left:1em;
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
