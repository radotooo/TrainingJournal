import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { StyledTextField, ButtonContainer, StyledButton } from './SaveScore.js'

export default function AddNewForm() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [score, setScore] = useState("")

    const handleReset = () => {
        console.log("Hello");
        setName("")
        setDescription("")
        setScore("")
    }

    return (
        <>

            <TextField onChange={(e) => setName(e.target.value)} value={name} label="Name" />
            <StyledTextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                multiline
                rows={4}
                variant="outlined"
            />

            <TextField value={score}
                onChange={(e) => setScore(e.target.value)} label="Score" />
            <ButtonContainer>
                <StyledButton variant="contained" color="primary">
                    Send
                </StyledButton>
                <StyledButton onClick={handleReset} variant="contained" color="primary">
                    Reset
                </StyledButton>
            </ButtonContainer>
        </ >
    )
}
