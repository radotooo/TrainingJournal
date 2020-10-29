import React, { useEffect, useState } from 'react'
import Wod from './Wod'
import styled from "styled-components";

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
`;


export default function Main() {

    const [wod, setWod] = useState("")

    useEffect(() => {
        const data = async () => {
            const datax = await fetch("http://localhost:5000/")
            const final_data = await datax.text()
            setWod(final_data)
        }
        data();
    }, [])


    return (
        <Wrapper>
            <div className="wod">
                <Wod data={wod} />
            </div>
        </Wrapper>
    )
}