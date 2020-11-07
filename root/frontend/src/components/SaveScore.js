import { Button, FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styled from "styled-components";
import AddNewForm from './AddNewForm';

export const StyledButton = styled(Button)`
text-transform:none !important;
margin:1em !important;
`;

export const StyledTextField = styled(TextField)`
margin:15px 0 !important;
`;

export const ButtonContainer = styled.div`
display:flex;
flex-wrap:wrap;
`;

const data = ["data1", "data2", "data3"]

export default function SaveScore() {
    const [toggleAdd, setToggleAdd] = useState(false)



    return (
        <div>
            <FormControl variant="outlined"  >
                <InputLabel >From</InputLabel>
                <Select
                    native
                    label="From"
                >
                    <option value="" />
                    {data.map((value, index) => <option key={index} value={value} >{value}</option>)}
                </Select>
                <TextField id="standard-basic" label="Time" />
                <ButtonContainer>
                    <StyledButton variant="contained" color="primary">
                        Search
                </StyledButton>
                    <StyledButton onClick={() => setToggleAdd(!toggleAdd)} variant="contained" color="primary">
                        Add New
                </StyledButton>
                </ButtonContainer>
                {toggleAdd && <AddNewForm />}

            </FormControl>
        </div>
    )
}
