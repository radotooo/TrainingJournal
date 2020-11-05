import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from "styled-components";
import device from './Styles/MediqQueries';
import Button from '@material-ui/core/Button';

const Container = styled.div`
display:flex;
margin:1em;
 @media ${device.tablet}{
        flex-direction:column;
        align-items:center;
    }
`;

const StyledP = styled.p`
align-self:center;
font-size:20px;
color:blue;
margin:0 1em;
`;

const StyledTextField = styled(TextField)`
width:100px !important;
margin:0 1em !important;
    @media ${device.tablet}{
        margin:0.7em 0 !important;
    }
`;
const ButtonContainer = styled.div`
 @media ${device.mobileXS}{
     display:flex;
     justify-content:center;
     flex-direction:column;
    }
`;
const StyledButton = styled(Button)`
background-color:${props => props.customColor} !important;
color:white !important;
height:56px;
width:80px;
margin:0 0.5em !important;
&:hover{
    background-color:${props => props.customColor ? "#2069b3" : ""} !important;
   
}
    @media ${device.tablet}{
       height:40px;
    }
     @media ${device.mobileXS}{
    margin:0.2em 0 !important;
    }
`;

export default function ConversionForm({ formula, label, data }) {

    const [meters, setMeters] = useState("")
    const [result, setResult] = useState("")
    const [fromValue, setFromValue] = useState("")
    const [toValue, setToValue] = useState("")

    const handleClick = () => {
        setResult(formula[fromValue][toValue](meters))
    }

    return (
        <Container>
            <StyledTextField rows="5" type="number" variant='outlined' label={fromValue === "Running" ? "Meters" : label} value={meters} onChange={(e) => setMeters(e.target.value)} />
            <FormControl variant="outlined" onChange={(e) => { setFromValue(e.target.value) }} >
                <InputLabel >From</InputLabel>
                <Select
                    native
                    label="From"
                >
                    <option aria-label="None" value="" />
                    {data.map((value, index) => <option key={index} value={value} >{value}</option>)}
                </Select>
            </FormControl>
            <StyledP>=</StyledP>
            <FormControl variant="outlined" onChange={(e) => { setToValue(e.target.value) }}>
                <InputLabel >To</InputLabel>
                <Select
                    native
                    label="To"
                >
                    <option aria-label="None" value="" />
                    {data.map((value, index) => value === fromValue ? <option key={index} disabled value={value} >{value}</option> : <option value={value} key={index}>{value}</option>)}
                </Select>
            </FormControl>

            <StyledTextField type="text" variant='outlined' value={result} label="Result" onChange={(e) => setResult(e.target.value)} />
            <ButtonContainer>
                <StyledButton variant="contained" customColor="#1976D2" onClick={handleClick}>Calc</StyledButton>
                <StyledButton variant="contained" color="secondary"
                    onClick={handleClick}>Reset</StyledButton>
            </ButtonContainer>
        </Container >
    )
}
