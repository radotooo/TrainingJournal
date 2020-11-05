import React from 'react'
import styled from "styled-components";
import { calorieFormula, meterFormula, selectData } from '../data/formulas';
import ConversionForm from './ConversionForm';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin-top:30px;
`;

export default function Conversion() {

    return (
        <Container>

            <ConversionForm data={selectData} formula={meterFormula} label="Meters" />
            <ConversionForm data={selectData} formula={calorieFormula} label="Calories" />

        </Container>
    )
}
