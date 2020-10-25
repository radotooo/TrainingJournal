import React from 'react'
import Header from './Header'
import Main from './Main'
import styled from "styled-components";

import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function Home() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    <Switch>
                        <Route exact path="/"  >
                            <Main />
                        </Route>
                        <Route path="/calculator"  >
                            {/* <Calculator /> */}
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>

    )
}

