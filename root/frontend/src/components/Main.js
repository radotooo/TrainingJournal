import React, { useEffect, useState } from 'react'
import Wod from './Wod'
import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
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
        <Wrapper center>
            <div className="wod">
                <Wod data={wod} />
            </div>
        </Wrapper>
    )
}