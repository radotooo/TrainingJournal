import React, { useState } from 'react'
import styled from "styled-components";
import device from "./Styles/MediqQueries";
import Paper from '@material-ui/core/Paper';

const Input = styled.input.attrs(props => ({
    type: "text",
}))`
    width:80px;
    margin:0 5px;
    height:30px;
    border-radius:5px;
    border:none;
    background-color:${props => props.error ? "#ffcccb" : ''};
        &:focus{
     outline-color:#0044cc;
    }
    @media ${device.tablet}{
    margin-bottom:10px;
}
`;

const Button = styled.a`
    padding:0.5em;
    margin:0.2em;
    background-color:${props => props.secondaryColor ? "#008f7f" : "#d81159"};
    border-radius:0.5em;
    color:white;
    width:100%;
    cursor:pointer;
    transition: all .2s ;
    &:hover{
        
    transform: scale(1.02);
    }
    @media ${device.mobileL}{
    width:80px;
}
`;

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    @media ${device.tablet}{
    width:100%;
    justify-content:space-between;
    }
    @media ${device.mobileL}{
    flex-direction:column;
}
`;

const Form = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    width:600px;
    margin-top: 30px;
    background-color:#4bb3fd;
    padding:2em;
    border-radius:1em;
      @media ${device.tablet}{
        max-width:300px;
    }
    @media ${device.mobileL}{
        max-width:100px;
    ;
}
`;

const StyledPaper = styled(Paper)`
 border-radius:1em !important;
`;

export default function CalculatorForm(props) {

    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState(false)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCalculate(e);
        }
    }

    const handleCalculate = (e) => {
        let result = props.calculate(firstNum, secondNum);

        if (isNaN(result)) {
            setError(true)
        }
        else {
            setError(false)
            setResult(result)
        }
    }

    const reset = () => {
        setFirstNum('')
        setSecondNum('')
        setResult('')
        setError(false)
    }

    return (
        <div>
            <StyledPaper elevation={3}>
                <Form action="">
                    <Container>
                        <Input error={error} placeholder={props.text[0]} onChange={(e) => setFirstNum(e.target.value)} value={firstNum} />
                        <Input error={error} placeholder={props.text[1]} onKeyPress={(e) => handleKeyDown(e)} onChange={(e) => setSecondNum(e.target.value)} value={secondNum} />
                        <Input placeholder={props.text[2]} value={result} readOnly />
                    </Container>
                    <Container >
                        <Button onClick={handleCalculate}>Calculate</Button>
                        <Button secondaryColor onClick={reset}>Reset</Button>
                    </Container>
                </Form>
            </StyledPaper>
        </div>
    )
}
