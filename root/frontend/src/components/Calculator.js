import React from 'react'
import styled from "styled-components";
import CalculatorForm from './CalculatorForm';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const percentageOfNumber = ["50%", "of 100", "Result 50"]
const numberPercentageOfNumber = ["10 is what %", "of 100", "Result 10%"]
const getPercentageOfNumber = (firstNum, secondNum) => {
    if (firstNum === '' && secondNum === '') {
        return NaN
    }
    return (firstNum / 100) * secondNum;
}
const getWhatPercentageOfYisX = (firstNum, secondNum) => {
    if (firstNum === '' && secondNum === '') {
        return NaN
    }
    return (firstNum / secondNum) * 100;
}


export default function Calculator() {


    return (
        <Wrapper>
            <CalculatorForm text={percentageOfNumber} calculate={getPercentageOfNumber} />
            <CalculatorForm text={numberPercentageOfNumber} calculate={getWhatPercentageOfYisX} />
        </Wrapper>
    )
}
