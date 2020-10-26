import React from 'react'
import styled from "styled-components";


const Wrapper = styled.div`
display:flex;
justify-content:center;
`;

const Input = styled.input.attrs(props => ({
    type: "text"
}))`
width:${props => props.size + "px"};

`;

const Form = styled.div`
display: flex;
justify-content: center;
align-items: flex - start;
flex-wrap: wrap;
margin-top: 20px;

`;

export default function Calculator() {
    return (
        <Wrapper>
            <Form action="">
                <span>What is</span>
                <Input size="50" />
                <span>% of</span>
                <Input size="80" />
                <span>?</span>
            </Form>
        </Wrapper>
    )
}
