import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from "styled-components";
import device from './Styles/MediqQueries';

const Container = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:30px;
    @media ${device.mobileXL}{
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
    @media ${device.mobileXL}{
        margin:0.7em 0 !important;
    }
`;

// const StyledSelect = styled(Select)`
// height:40px !important;
// & .MuiOutlinedInput-input{
//    padding:10px 14px;
// }
// `;

const fieldData = ["Row", "Assault Bike", "Ski-erg", "Running"]

export default function Conversion() {
    const [meters, setMeters] = useState("")
    const [result, setResult] = useState("")
    const [fromValue, setFromValue] = useState("")
    const [toValue, setToValue] = useState("")

    const handleClick = () => {

        console.log(fromValue);
        console.log(toValue);
        console.log("Hello");

        if (fromValue === "Row" && toValue === "Running") {
            setResult(meters * 0.8)
        }
    }

    return (
        <Container>
            <StyledTextField rows="5" type="number" variant='outlined' label="Meters" value={meters} onChange={(e) => setMeters(e.target.value)} />

            <FormControl variant="outlined" onChange={(e) => { setFromValue(e.target.value) }} >
                <InputLabel >From</InputLabel>
                <Select
                    native
                    label="From"
                // onChange={e => setData(e.target.value)}
                >
                    <option aria-label="None" value="" />
                    {fieldData.map((value, index) => <option key={index} value={value} >{value}</option>)}
                </Select>
            </FormControl>
            <StyledP>=</StyledP>
            <FormControl variant="outlined" onChange={(e) => { setToValue(e.target.value) }}>
                <InputLabel >To</InputLabel>
                <Select
                    native
                    label="To"
                // onChange={e => setData(e.target.value)}
                >
                    <option aria-label="None" value="" />
                    {fieldData.map((value, index) => value === fromValue ? <option key={index} disabled value={value} >{value}</option> : <option value={value} key={index}>{value}</option>)}
                </Select>
            </FormControl>

            <StyledTextField type="number" variant='outlined' value={result} label="Result" onChange={(e) => setResult(e.target.value)} />
            <button onClick={handleClick}>Calc</button>
        </Container>
    )
}
