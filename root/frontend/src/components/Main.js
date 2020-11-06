import React, { useEffect, useState } from 'react'
import Wod from './Wod'
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import SaveScore from './SaveScore';

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const StyledButton = styled(Button)`
background-color:grey!important;
margin-top:10px!important;
color:white !important;
`;


export default function Main() {

    const [wod, setWod] = useState("")

    useEffect(() => {
        const data = async () => {
            const datax = await fetch("http://localhost:5000/")
            const final_data = await datax.text()
            setWod(final_data)
        }
        data();
    }, [])

    return (
        <Container center>
            <div >
                <Wod data={wod} />
            </div>
            <StyledButton>Save Score</StyledButton>
            <SaveScore />
        </Container>
    )
}