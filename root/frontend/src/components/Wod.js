import React from 'react'
import styled from "styled-components";

const Container = styled.div`
max-width:300px;
background-color: #e6f9fc ;
padding:1em;
border-radius:0.5em;
margin-top:2em;
`;
const Title = styled.div`
height:2em;
text-align:center;
`;

var today = new Date();


export default function Wod({ data }) {

    return (
        <Container >
            <Title>{today.toLocaleDateString()}</Title>
            <div dangerouslySetInnerHTML={{ __html: data }} ></div>
        </Container>
    )
}
