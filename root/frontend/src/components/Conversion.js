import { FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from "styled-components";

const Container = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:30px;
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
`;

const StyledSelect = styled(Select)`
height:40px !important;
& .MuiOutlinedInput-input{
   padding:10px 14px;
}
`;

const fieldData = ["Row", "Assault Bike", "Ski-erg", "Running"]

export default function Conversion() {
    const [data, setData] = useState("")
    console.log(data);
    return (
        <Container>
            <StyledTextField rows="5" type="number" size="medium" variant='outlined' label="Meters" />

            <FormControl variant="outlined" >
                <InputLabel >From</InputLabel>
                <Select
                    native
                    size="small"
                    label="From"
                    onChange={e => setData(e.target.value)}
                >
                    <option aria-label="None" value="" />
                    {fieldData.map(value => <option value={value}>{value}</option>)}
                </Select>
            </FormControl>
            <StyledP>=</StyledP>
            <FormControl variant="outlined" >
                <InputLabel >To</InputLabel>
                <Select
                    native
                    size="small"
                    label="To"
                    onChange={e => setData(e.target.value)}
                >
                    <option aria-label="None" value="" />
                    {fieldData.map(value => value === data ? <option disabled value={value}>{value}</option> : <option value={value}>{value}</option>)}
                </Select>
            </FormControl>

            <StyledTextField type="number" size="text" variant='outlined' label="Result" />

        </Container>
    )
}
