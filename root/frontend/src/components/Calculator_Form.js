import React from 'react'
import styled from "styled-components";
import device from "./Styles/MediqQueries";


const Input = styled.input.attrs(props => ({
    type: "text",
        }))`
width:80px;
margin:0 5px;
height:25px;
@media ${device.tablet}{
margin-bottom:10px;
}
`;

const Button = styled.a`
padding:0.5em;
background-color:#d81159;
border-radius:0.5em;
color:white;
width:100%;
`;

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap: wrap;
@media ${device.tablet}{
    width:100%;
justify-content:space-between;

}
`;

const Form = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap:wrap;
width:600px;
margin-top: 20px;
background-color:#4bb3fd;
padding:2em;
border-radius:1em;
@media ${device.tablet}{
    width:300px;
}
`;

export default function Calculator_Form(props) {
    return (
        <div>
               <Form action="">
                <Container>
                    {props.text.map(x =>  <Input placeholder={x}/>)}
                </Container>
                <Container>
                <Button>Calculate</Button>
                </Container>
            </Form>
        </div>
    )
}
