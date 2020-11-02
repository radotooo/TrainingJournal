import React from 'react'
import Header from './Header'
import Main from './Main'
import styled from "styled-components";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calculator from './Calculator';
import Conversion from './Conversion';

const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
`;


export default function Home() {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Switch>
                    <Route exact path="/"  >
                        <Main />
                    </Route>
                    <Route path="/calculator"  >
                        <Calculator />
                    </Route>
                    <Route path="/conversion"  >
                        <Conversion />
                    </Route>
                </Switch>

            </Container>
        </BrowserRouter>

    )
}

