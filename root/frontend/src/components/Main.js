import React, { useEffect, useState } from 'react'
import Wod from './Wod'

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
        <div className="main">
            <div className="wod">
                <Wod data={wod} />
            </div>
        </div>
    )
}