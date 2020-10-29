import React from 'react'
import styled from "styled-components";
import Calculator_Form from './Calculator_Form';
import device from "./Styles/MediqQueries";



const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const data = [["50%","of 100","Result 50"],["10 is what %","of 100","Result 10%"]]

export default function Calculator() {
    return (
        <Wrapper>
            {data.map(x=> <Calculator_Form text={x} />)}
        </Wrapper>
    )
}
